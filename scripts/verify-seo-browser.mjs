// Medición local sin tráfico a Analytics ni envíos al negocio. No equivale a CrUX.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { chromium } from 'playwright';

const root = resolve('dist');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.avif': 'image/avif' };
const server = createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(root, `.${path}${path.endsWith('/') ? 'index.html' : ''}`);
    if (!file.startsWith(root + sep)) throw new Error('Invalid path');
    const content = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[extname(file)] ?? 'application/octet-stream' });
    res.end(content);
  } catch { res.writeHead(404); res.end(); }
});
await new Promise((done, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', done); });
const base = `http://127.0.0.1:${server.address().port}`;
const paths = ['/', '/servicios/rotulacion/vehiculos/', '/servicios/rotulacion/letras-corporeas/', '/servicios/rotulacion/rotulos-luminosos-fachadas/', '/servicios/rotulacion/vinilos/', '/servicios/impresion-digital/lonas-publicitarias/', '/servicios/impresion-digital/soportes-rigidos/', '/blog/rotulacion-vehiculos-empresa/', '/proyectos/espacio-tag-heuer/', '/proyectos/senaletica-aeropuerto-alicante/'];
let browser;
const results = [];
try {
  browser = await chromium.launch({ headless: true });
  for (const width of [390, 1440]) {
    for (const path of paths) {
      const context = await browser.newContext({ viewport: { width, height: 900 } });
      await context.route('**/*', route => route.request().url().startsWith(base) && !route.request().url().includes('/_vercel/') ? route.continue() : route.fulfill({ status: 200, contentType: 'text/javascript', body: '' }));
      await context.addInitScript(() => {
        window.__seoVitals = { lcp: 0, cls: 0 };
        new PerformanceObserver(list => { for (const entry of list.getEntries()) window.__seoVitals.lcp = entry.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
        new PerformanceObserver(list => { for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__seoVitals.cls += entry.value; }).observe({ type: 'layout-shift', buffered: true });
      });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      const response = await page.goto(base + path, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200, path);
      assert.equal(await page.locator('h1').count(), 1, path);
      assert.deepEqual(errors, [], path);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `${path}: sin desbordamiento a ${width}px`);
      const metrics = await page.evaluate(() => ({
        ...window.__seoVitals,
        localResourcesBytes: performance.getEntriesByType('resource').reduce((total, r) => total + r.transferSize, 0),
        eagerImages: [...document.images].filter(i => i.loading === 'eager').map(i => ({ src: new URL(i.currentSrc).pathname, width: i.clientWidth, naturalWidth: i.naturalWidth, loaded: i.complete && i.naturalWidth > 0 })),
      }));
      assert.ok(metrics.eagerImages.every(image => image.loaded), `${path}: imágenes prioritarias cargadas`);
      results.push({ path, viewportWidth: width, ...metrics });
      if (path.includes('/servicios/')) {
        await page.locator('details').last().locator('summary').click();
        assert.equal(await page.locator('details').last().getAttribute('open'), '', `${path}: FAQ abre`);
      }
      if (width === 390 && path.endsWith('/soportes-rigidos/')) await page.screenshot({ path: '/tmp/clavd-soportes-mobile.png', fullPage: true });
      if (width === 1440 && path.endsWith('/lonas-publicitarias/')) await page.screenshot({ path: '/tmp/clavd-lonas-desktop.png', fullPage: true });
      await context.close();
    }
  }
  await writeFile('docs/seo/browser-audit-2026-10-13.json', JSON.stringify({ environment: 'Chromium local, sin throttling; recursos externos interceptados; sin consentimiento analítico; no es medición de campo ni Lighthouse', results }, null, 2) + '\n');
  console.log(JSON.stringify({ checkedViews: results.length, maxLocalLCPms: Math.max(...results.map(r => r.lcp)), maxLocalCLS: Math.max(...results.map(r => r.cls)) }, null, 2));
} finally { await browser?.close(); server.close(); }
