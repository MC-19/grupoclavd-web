import { existsSync, mkdirSync, readFileSync, readdirSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { spawnSync } from "node:child_process";

const projectRoot = process.cwd();
const distRoot = join(projectRoot, "dist");
const publicRoot = join(projectRoot, "public");
const htmlFiles = [];

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
  for (const match of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    const url = match[1].split(/[?#]/)[0];
    if (url.startsWith("/ImagenesWebClav/") || url === "/images/banderola-comercial-fachada.jpg" || url.startsWith("/images/work/")) {
      sources.add(decodeURIComponent(url));
    }
  }
}

let generated = 0;
for (const url of sources) {
  const input = join(publicRoot, url);
  if (!existsSync(input)) {
    console.warn(`No se encuentra: ${url}`);
    continue;
  }

  const extension = extname(input);
  const base = input.slice(0, -extension.length);
  const variants = [
    { width: 640, output: `${base}-640.webp` },
    { width: 1280, output: `${base}-1280.webp` },
  ];

  for (const variant of variants) {
    mkdirSync(dirname(variant.output), { recursive: true });
    const result = spawnSync("magick", [
      input,
      "-auto-orient",
      "-strip",
      "-resize",
      `${variant.width}x${variant.width}>`,
      "-quality",
      "80",
      variant.output,
    ], { stdio: "inherit" });

    if (result.status !== 0) process.exit(result.status ?? 1);
    generated += 1;
  }
}

console.log(`Generadas ${generated} variantes WebP para ${sources.size} imágenes utilizadas.`);
