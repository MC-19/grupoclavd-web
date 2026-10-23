// Run after a build: node scripts/verify-halloween.mjs on|off
// External services are intercepted; screenshots never send analytics.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { chromium } from 'playwright';

assert.ok(['on', 'off'].includes(process.argv[2]), 'Indica on u off');
const enabled = process.argv[2] === 'on';
const root = resolve('dist');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(root, `.${pathname}${pathname.endsWith('/') ? 'index.html' : ''}`);
    assert.ok(file.startsWith(root + sep));
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404); res.end(); }
});
let browser;
try {
  await new Promise((done, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', done); });
  const base = `http://127.0.0.1:${server.address().port}`;
  await mkdir('docs/halloween', { recursive: true });
  browser = await chromium.launch({ headless: true });
  for (const width of [320, 390, 768, 1024, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 950 }, reducedMotion: 'reduce' });
    await context.route('**/*', route => route.request().url().startsWith(base) && !route.request().url().includes('/_vercel/') ? route.continue() : route.fulfill({ contentType: 'text/javascript', body: '' }));
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base, { waitUntil: 'networkidle' });
    assert.equal(await page.locator('html').getAttribute('data-season'), enabled ? 'halloween' : null);
    assert.equal(await page.locator('[data-halloween-campaign]').count(), enabled ? 1 : 0);
    assert.equal(await page.locator('[data-halloween-decoration]').count() > 0, enabled);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Sin desbordamiento ${width}`);
    assert.ok(await page.locator('[data-halloween-decoration]').evaluateAll(nodes => nodes.every(node => node.getAttribute('aria-hidden') === 'true' && node.getAttribute('focusable') === 'false' && getComputedStyle(node).pointerEvents === 'none')));
    await page.locator('#analytics-reject').click();
    if (width < 900) {
      await page.locator('#menu-button').click();
      assert.equal(await page.locator('#menu-button').getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('#menu-button').getAttribute('aria-expanded'), 'false');
    }
    await page.locator('main a[href="/presupuesto/"]').first().click({ trial: true });
    if (enabled) {
      await page.locator('[data-halloween-campaign] a').click({ trial: true });
      assert.equal(await page.locator('[data-halloween-campaign] a').getAttribute('href'), '/presupuesto/');
    }
    await page.evaluate(() => scrollTo(0, 0));
    await page.evaluate(() => document.activeElement?.blur());
    if ([390, 1440].includes(width)) await page.screenshot({ path: `docs/halloween/${enabled ? 'on' : 'off'}-${width}.png` });
    if (enabled && [390, 1440].includes(width)) {
      await page.locator('[data-halloween-campaign]').screenshot({ path: `docs/halloween/campaign-${width}.png`, style: '#site-header, .skip-link { display: none !important; }' });
    }
    for (const path of ['/contacto/', '/presupuesto/']) {
      await page.goto(base + path, { waitUntil: 'networkidle' });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${path} sin desbordamiento ${width}`);
      assert.equal(await page.locator('[data-halloween-campaign]').count(), 0);
    }
    assert.deepEqual(errors, []);
    await context.close();
    console.log(`OK Halloween ${enabled ? 'on' : 'off'}: ${width}px, navegación, cookies, CTA, contacto y presupuesto`);
  }
} finally {
  await browser?.close();
  await new Promise(done => server.close(done));
}
