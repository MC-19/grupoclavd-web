// Pruebas sobre dist: el proveedor y todos los endpoints de analítica se interceptan.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { chromium } from 'playwright';

const root = resolve('dist');
const googleTagIndex = process.argv.indexOf('--google-tag');
const googleTag = googleTagIndex >= 0 ? await readFile(process.argv[googleTagIndex + 1], 'utf8') : '';
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png' };
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(root, `.${pathname}${pathname.endsWith('/') ? 'index.html' : ''}`);
    if (!file.startsWith(root + sep)) throw new Error('Invalid path');
    res.writeHead(200, { 'Content-Type': mime[extname(file)] ?? 'application/octet-stream' });
    res.end(await readFile(file));
  } catch { res.writeHead(404); res.end(); }
});
await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
const base = `http://127.0.0.1:${server.address().port}`;
let browser;
let checks = 0;
async function scenario(name, test, options = {}) {
  const context = await browser.newContext(options);
  const state = { submissions: 0, tagLoads: 0, collection: [], errors: [], response: { status: 200, success: true } };
  await context.route('**/*', async (route) => {
    const request = route.request();
    const url = request.url();
    if (new URL(url).hostname === 'api.web3forms.com') {
      state.submissions++;
      if (state.response.delay) await new Promise(resolve => setTimeout(resolve, state.response.delay));
      if (state.response.networkError) return route.abort();
      return route.fulfill({ status: state.response.status, contentType: 'application/json', body: state.response.invalidJSON ? 'invalid' : JSON.stringify({ success: state.response.success }) });
    }
    if (url.includes('googletagmanager.com/gtag/js')) {
      state.tagLoads++;
      return route.fulfill({ contentType: 'text/javascript', body: googleTag });
    }
    if (/google-analytics\.com|analytics\.google\.com|doubleclick\.net|googleadservices\.com/.test(url)) {
      state.collection.push({ url, body: request.postData() ?? '' });
      return route.fulfill({ status: 204 });
    }
    if (url.startsWith(base) && !url.includes('/_vercel/')) return route.continue();
    // Ningún otro servicio externo recibe tráfico de prueba.
    return route.fulfill({ contentType: 'text/javascript', body: '' });
  });
  const page = await context.newPage();
  page.on('pageerror', error => state.errors.push(error.message));
  try {
    await test(page, state, context);
    assert.deepEqual(state.errors, [], 'Sin errores de JavaScript');
    checks++;
    console.log(`OK ${name}`);
  } finally { await context.close(); }
}
const events = (page, name) => page.evaluate(name => Array.from(window.dataLayer ?? []).filter(entry => entry[0] === 'event' && entry[1] === name).map(entry => entry[2]), name);
async function contact(page) {
  await page.goto(`${base}/contacto/`, { waitUntil: 'networkidle' });
  assert.equal(await page.locator('#contact-submit').getAttribute('data-configured'), 'true', 'Configura PUBLIC_WEB3FORMS_ACCESS_KEY para compilar la prueba; nunca se envía al proveedor real');
}
async function fill(page) {
  await page.fill('#contact-name', 'Prueba automatizada');
  await page.fill('#contact-email', 'qa@example.com');
  await page.fill('#contact-topic', 'Consulta de prueba');
  await page.fill('#contact-message', 'Contenido de prueba que no debe enviarse a Analytics.');
  await page.check('#contact-privacy');
}
async function accept(page) {
  await page.locator('#analytics-accept').click();
  await page.waitForFunction(() => Array.from(window.dataLayer ?? []).some(e => e[0] === 'config'));
  await page.waitForTimeout(100);
}
async function submit(page, success) {
  await page.locator('#contact-submit').click();
  await page.waitForFunction(success => document.querySelector('#contact-status').textContent.includes(success ? 'Mensaje enviado correctamente' : 'No hemos podido enviar'), success);
}
try {
  browser = await chromium.launch({ headless: true });
  await scenario('Sin consentimiento: sin etiqueta ni lead, formulario operativo', async (page, state) => {
    await contact(page); await fill(page); await submit(page, true);
    assert.equal(state.submissions, 1); assert.equal(state.tagLoads, 0); assert.equal(state.collection.length, 0);
    assert.equal((await events(page, 'generate_lead')).length, 0);
  });
  await scenario('Rechazo guardado: permanece bloqueado al recargar', async (page, state) => {
    await contact(page); await page.click('#analytics-reject'); await page.reload({ waitUntil: 'networkidle' });
    assert.equal(state.tagLoads, 0); assert.equal(state.collection.length, 0);
    assert.equal(await page.locator('#analytics-consent-banner').isVisible(), false);
  });
  await scenario('Validación: sin petición ni lead para campos inválidos', async (page, state) => {
    await contact(page); await accept(page); await page.click('#contact-submit');
    assert.equal(state.submissions, 0); assert.equal((await events(page, 'generate_lead')).length, 0);
  });
  for (const [name, response] of Object.entries({ 'HTTP fallido': { status: 422, success: true }, 'success falso': { status: 200, success: false }, 'respuesta no JSON': { status: 200, invalidJSON: true }, 'fallo de red': { networkError: true } })) {
    await scenario(`${name}: sin lead y reintento disponible`, async (page, state) => {
      await contact(page); await accept(page); await fill(page); state.response = response; await submit(page, false);
      assert.equal(state.submissions, 1); assert.equal((await events(page, 'generate_lead')).length, 0);
      assert.equal(await page.locator('#contact-submit').isDisabled(), false);
      state.response = { status: 200, success: true }; await submit(page, true);
      assert.equal(state.submissions, 2); assert.equal((await events(page, 'generate_lead')).length, 1);
    });
  }
  await scenario('Doble envío concurrente y evento repetido: un solo lead', async (page, state) => {
    await contact(page); await accept(page); await fill(page); state.response.delay = 100;
    await page.evaluate(() => {
      const form = document.querySelector('#contact-form');
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });
    await page.waitForFunction(() => document.querySelector('#contact-status').textContent.includes('Mensaje enviado correctamente'));
    const leads = await events(page, 'generate_lead'); assert.equal(leads.length, 1); assert.equal(state.submissions, 1);
    assert.equal(leads[0].lead_source, 'contact'); assert.ok(leads[0].event_id);
    assert.equal(Object.hasOwn(leads[0], 'email'), false);
    await page.evaluate(params => document.dispatchEvent(new CustomEvent('gc:track', { detail: { event: 'generate_lead', params } })), leads[0]);
    assert.equal((await events(page, 'generate_lead')).length, 1);
    await fill(page); await submit(page, true);
    const nextLeads = await events(page, 'generate_lead'); assert.equal(nextLeads.length, 2); assert.notEqual(nextLeads[0].event_id, nextLeads[1].event_id);
  });
  await scenario('Fallo de medición: conserva el éxito del envío', async page => {
    await contact(page); await accept(page); await fill(page);
    await page.evaluate(() => { window.gtag = () => { throw new Error('Analytics bloqueado'); }; });
    await submit(page, true); assert.equal(await page.locator('#contact-message').inputValue(), '');
  });
  await scenario('Consentimiento retirado: sin nuevos eventos ni cookies GA', async (page, state) => {
    await contact(page); await accept(page);
    await page.evaluate(() => { document.cookie = '_ga=prueba; path=/'; document.dispatchEvent(new CustomEvent('gc:manage-consent')); });
    await page.click('#analytics-reject'); await page.waitForTimeout(300);
    const count = state.collection.length;
    await page.evaluate(() => document.querySelector('a[href^="tel:"]').dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true })));
    await fill(page); await submit(page, true); await page.waitForTimeout(300);
    assert.equal((await events(page, 'generate_lead')).length, 0); assert.equal((await events(page, 'click_phone')).length, 0);
    assert.equal(state.collection.length, count); assert.equal(await page.evaluate(() => window['ga-disable-G-9JF2L5RGN9']), true);
    assert.equal(await page.evaluate(() => document.cookie.split(';').some(c => c.trim().startsWith('_ga='))), false);
    await page.evaluate(() => document.dispatchEvent(new CustomEvent('gc:manage-consent'))); await page.click('#analytics-accept');
    assert.equal(state.tagLoads, 1);
    assert.equal(await page.evaluate(() => Array.from(window.dataLayer).filter(e => e[0] === 'config').length), 1);
  });
  await scenario('WhatsApp, teléfono y email: uno por clic y ninguno sin consentimiento', async page => {
    await contact(page);
    const click = async selector => page.evaluate(sel => {
      const link = document.querySelector(sel); link.addEventListener('click', event => event.preventDefault(), { once: true }); link.click();
    }, selector);
    const links = { click_whatsapp: 'a[href^="https://wa.me/"]', click_phone: 'a[href^="tel:"]', click_email: 'a[href^="mailto:"]' };
    for (const selector of Object.values(links)) await click(selector);
    for (const name of Object.keys(links)) assert.equal((await events(page, name)).length, 0);
    await accept(page);
    for (const [name, selector] of Object.entries(links)) { await click(selector); assert.equal((await events(page, name)).length, 1); }
  });
  await scenario('Preferencias sincronizadas entre pestañas', async (page, _state, context) => {
    await contact(page); await accept(page); const second = await context.newPage();
    await second.goto(`${base}/contacto/`, { waitUntil: 'networkidle' });
    await second.evaluate(() => document.dispatchEvent(new CustomEvent('gc:manage-consent'))); await second.click('#analytics-reject');
    await page.waitForFunction(() => window['ga-disable-G-9JF2L5RGN9'] === true);
    await fill(page); await submit(page, true); assert.equal((await events(page, 'generate_lead')).length, 0);
  });
  for (const blocked of [false, true]) {
    await scenario(`Presupuesto completo${blocked ? ' con almacenamiento bloqueado' : ''}: lead solo al envío final`, async (page, state) => {
      if (blocked) await page.addInitScript(() => {
        Storage.prototype.getItem = () => { throw new DOMException('Bloqueado', 'SecurityError'); };
        Storage.prototype.setItem = () => { throw new DOMException('Bloqueado', 'SecurityError'); };
      });
      await page.goto(`${base}/presupuesto/`, { waitUntil: 'networkidle' }); await accept(page);
      assert.equal((await events(page, 'begin_quote')).length, 1);
      await page.click('#quote-item-form button[type="submit"]');
      assert.equal(state.submissions, 0); assert.equal((await events(page, 'generate_lead')).length, 0);
      await page.click('#quote-request'); await page.waitForURL('**/contacto/?presupuesto=1*');
      await page.waitForFunction(() => document.querySelector('#contact-topic').value === 'Solicitud de presupuesto personalizado');
      assert.match(await page.locator('#contact-message').inputValue(), /Rotulación interior/);
      assert.equal((await events(page, 'generate_lead')).length, 0);
      if (blocked) { assert.ok(new URL(page.url()).hash.includes('mensaje=')); await accept(page); }
      await page.fill('#contact-name', 'Prueba'); await page.fill('#contact-email', 'qa@example.com'); await page.check('#contact-privacy');
      await submit(page, true); const leads = await events(page, 'generate_lead');
      assert.equal(leads.length, 1); assert.equal(leads[0].lead_source, 'quote');
      assert.equal(leads[0].page_location.includes('mensaje='), false);
    });
  }
  await scenario('Móvil: formulario y banner sin desbordamiento horizontal', async page => {
    await contact(page);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);
    await accept(page); await fill(page); await submit(page, true);
  }, { viewport: { width: 390, height: 844 } });
  for (const viewport of [{ width: 390, height: 844 }, { width: 1440, height: 1000 }]) {
    await scenario(`Contenido y enlaces a ${viewport.width}px`, async page => {
      for (const path of ['/', '/nosotros/', '/servicios/', '/servicios/rotulacion/vehiculos/', '/servicios/impresion-digital/', '/proyectos/stand-bistrea-ifa/']) {
        await page.goto(`${base}${path}`, { waitUntil: 'networkidle' });
        assert.equal(await page.locator('h1').count(), 1);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true, path);
        if (path === '/nosotros/') assert.match(await page.locator('main').innerText(), /2019/);
        if (path.startsWith('/servicios/')) assert.ok(await page.locator('main a[href^="/proyectos/"]').count() > 1);
      }
    }, { viewport });
  }
  console.log(`${checks} escenarios correctos. Proveedor simulado; no se han enviado emails ni datos a GA4.`);
} finally {
  await browser?.close(); await new Promise(resolve => server.close(resolve));
}
