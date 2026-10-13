// Valida el HTML generado: URLs, enlaces, metadatos y datos estructurados.
import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import { join } from 'node:path';

const domain = 'https://www.grupoclavd.com';
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&quot;', '"');
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]));
async function htmlFiles(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(file));
    else if (entry.name.endsWith('.html')) files.push(file);
  }
  return files;
}
const pages = new Map();
for (const file of await htmlFiles('dist')) {
  const path = file.slice(4).replace(/index\.html$/, '');
  if (/^\/google[\da-f]+\.html$/.test(path)) continue; // Archivo de verificación de propiedad.
  pages.set(path, await readFile(file, 'utf8'));
}
const sitemap = await readFile('dist/sitemap-0.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url);
assert.equal(urls.length, 46, 'Se conservan las 46 URLs del sitemap');
assert.equal(new Set(urls).size, urls.length, 'Sin duplicados en sitemap');
const config = JSON.parse(await readFile('vercel.json', 'utf8'));
const baseline = JSON.parse(await readFile('docs/seo/redirects-baseline.json', 'utf8'));
assert.deepEqual(config.redirects, baseline, 'Se preservan todos los redirects de Wix y sus destinos');
assert.equal(config.trailingSlash, true);
for (const redirect of config.redirects) assert.ok(pages.has(redirect.destination), `Destino existente: ${redirect.destination}`);
let links = 0;
let schemas = 0;
const imagesWithoutDimensions = [];
for (const [path, html] of pages) {
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${path}: un H1`);
  assert.ok(html.match(/<title>[^<]+<\/title>/), `${path}: title`);
  assert.ok([...html.matchAll(/<meta\b[^>]+>/g)].some(([tag]) => { const a = attributes(tag); return a.name === 'description' && a.content; }), `${path}: description`);
  const canonical = [...html.matchAll(/<link\b[^>]+>/g)].map(([tag]) => attributes(tag)).filter(a => a.rel === 'canonical');
  assert.equal(canonical.length, 1, `${path}: canonical único`);
  assert.equal(canonical[0].href, domain + (path === '/404.html' ? '/404/' : path), `${path}: canonical consistente`);
  if (path !== '/404.html') assert.ok(urls.includes(domain + path), `${path}: en sitemap`);
  for (const [, raw] of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    const schema = JSON.parse(raw); schemas++;
    assert.equal(schema['@context'], 'https://schema.org');
    assert.notEqual(schema['@type'], 'LocalBusiness');
    if (schema['@type'] === 'BreadcrumbList') schema.itemListElement.forEach((item, index) => {
      assert.equal(item.position, index + 1);
      assert.ok(pages.has(new URL(item.item).pathname), `${path}: breadcrumb válido`);
    });
    if (schema['@type'] === 'Service') {
      assert.equal(schema.url, canonical[0].href);
      assert.ok(html.includes('Qué necesitamos para valorar tu proyecto'));
    }
  }
  for (const [tag] of html.matchAll(/<a\b[^>]+>/g)) {
    const href = attributes(tag).href;
    if (!href || /^(mailto:|tel:|javascript:)/.test(href)) continue;
    const url = new URL(href, domain + path);
    if (url.origin !== domain) continue;
    if (!/\.[^/]+$/.test(url.pathname)) {
      assert.ok(url.pathname === '/' || url.pathname.endsWith('/'), `${path}: enlace sin barra final: ${href}`);
      assert.ok(pages.has(url.pathname), `${path}: enlace roto: ${href}`);
      if (url.hash && !url.hash.includes('=')) assert.ok(pages.get(url.pathname).includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${path}: ancla rota: ${href}`);
      links++;
    } else await access(join('dist', decodeURIComponent(url.pathname)));
  }
  for (const [tag] of html.matchAll(/<img\b[^>]+>/g)) {
    const image = attributes(tag);
    if (!image.width || !image.height) imagesWithoutDimensions.push({ page: path, src: image.src });
    if (image.src?.startsWith('/')) await access(join('dist', decodeURIComponent(image.src)));
  }
  if (path.startsWith('/proyectos/') && path !== '/proyectos/') {
    assert.ok(html.includes('Otros trabajos de rotulación e impresión'));
    assert.ok(html.includes('Solicitar presupuesto para un trabajo similar'));
  }
}
console.log(JSON.stringify({ pages: pages.size, sitemapURLs: urls.length, checkedLinks: links, schemas, imagesWithoutDimensions }, null, 2));
