import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { spawnSync } from "node:child_process";

const projectRoot = process.cwd();
const distRoot = join(projectRoot, "dist");
const publicRoot = join(projectRoot, "public");
const manifestFile = join(projectRoot, "src/data/imageVariants.json");
const htmlFiles = [];

function canonicalUrl(url) {
  return decodeURIComponent(url)
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith(".html")) htmlFiles.push(file);
  }
}

if (!existsSync(distRoot)) {
  console.error("No existe dist/. Ejecuta npm run build antes de optimizar imágenes.");
  process.exit(1);
}

walk(distRoot);

const sources = new Set();
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const declaredSources = [...html.matchAll(/data-image-source="([^"]+)"/g)];
  const imageSources = declaredSources.length
    ? declaredSources
    : [...html.matchAll(/<img[^>]+src="([^"]+)"/g)];
  for (const match of imageSources) {
    const url = canonicalUrl(match[1].split(/[?#]/)[0]);
    if (url.startsWith("/ImagenesWebClav/") || url === "/images/banderola-comercial-fachada.jpg" || url.startsWith("/images/work/")) {
      sources.add(url);
    }
  }
}

function dimensions(file) {
  const result = spawnSync("magick", [
    file,
    "-auto-orient",
    "-format",
    "%w %h",
    "info:",
  ], { encoding: "utf8" });

  if (result.status !== 0) {
    process.stderr.write(result.stderr ?? "");
    process.exit(result.status ?? 1);
  }

  const [width, height] = result.stdout.trim().split(/\s+/).map(Number);
  if (!Number.isFinite(width) || !Number.isFinite(height)) {
    console.error(`No se pudieron leer las dimensiones de ${file}`);
    process.exit(1);
  }
  return { width, height };
}

let generated = 0;
// Preserve prepared project variants, whose originals remain in asset-archive.
const existingManifest = existsSync(manifestFile)
  ? JSON.parse(readFileSync(manifestFile, "utf8"))
  : {};
const manifest = Object.fromEntries(
  Object.entries(existingManifest).filter(([url]) => url.startsWith("/images/projects/")),
);
for (const url of sources) {
  const decodedUrl = decodeURIComponent(url);
  const input = join(publicRoot, decodedUrl);
  if (!existsSync(input)) {
    console.warn(`No se encuentra: ${url}`);
    continue;
  }

  const extension = extname(input);
  const base = input.slice(0, -extension.length);
  const urlBase = url.slice(0, -extname(url).length);
  const original = dimensions(input);
  const targets = original.width <= 640 ? [640] : [640, 1280];
  const variants = [];

  for (const target of targets) {
    const output = `${base}-${target}.webp`;
    mkdirSync(dirname(output), { recursive: true });
    const result = spawnSync("magick", [
      input,
      "-auto-orient",
      "-strip",
      "-resize",
      `${target}x>`,
      "-quality",
      "80",
      output,
    ], { stdio: "inherit" });

    if (result.status !== 0) process.exit(result.status ?? 1);
    const variantDimensions = dimensions(output);
    if (!variants.some((variant) => variant.width === variantDimensions.width)) {
      variants.push({
        src: `${urlBase}-${target}.webp`,
        width: variantDimensions.width,
        height: variantDimensions.height,
      });
    }
    generated += 1;
  }

  manifest[url] = { ...original, variants };
}

mkdirSync(dirname(manifestFile), { recursive: true });
writeFileSync(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Generadas ${generated} variantes WebP para ${sources.size} imágenes utilizadas y actualizado el manifiesto.`);
