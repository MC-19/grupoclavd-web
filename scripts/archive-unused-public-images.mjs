import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  statSync,
} from "node:fs";
import { dirname, extname, join, relative, sep } from "node:path";

const projectRoot = process.cwd();
const publicRoot = join(projectRoot, "public");
const collectionRoot = join(publicRoot, "ImagenesWebClav");
const archiveRoot = join(projectRoot, "asset-archive", "public");
const apply = process.argv.includes("--apply");
const textExtensions = new Set([
  ".astro",
  ".css",
  ".html",
  ".js",
  ".json",
  ".mjs",
  ".ts",
  ".txt",
  ".xml",
]);

function walk(directory, files = []) {
  if (!existsSync(directory)) return files;
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) walk(file, files);
    else files.push(file);
  }
  return files;
}

function urlFor(file) {
  return `/${relative(publicRoot, file).split(sep).join("/")}`;
}

function encodedUrl(url) {
  return url
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

const referenceFiles = [
  ...walk(join(projectRoot, "src")),
  ...walk(join(projectRoot, "dist")),
].filter((file) => textExtensions.has(extname(file)));
const references = referenceFiles.map((file) => readFileSync(file, "utf8")).join("\n");
const candidates = walk(collectionRoot);
const unused = candidates.filter((file) => {
  const url = urlFor(file);
  return !references.includes(url) && !references.includes(encodedUrl(url));
});
const bytes = unused.reduce((total, file) => total + statSync(file).size, 0);

console.log(`${candidates.length - unused.length} recursos referenciados se conservan en public/.`);
console.log(`${unused.length} recursos sin referencias (${(bytes / 1024 / 1024).toFixed(1)} MB) ${apply ? "se archivarán" : "se pueden archivar"}.`);

if (!apply) {
  console.log("Auditoría únicamente. Usa --apply para moverlos sin borrarlos.");
  process.exit(0);
}

for (const file of unused) {
  const destination = join(archiveRoot, relative(publicRoot, file));
  if (existsSync(destination)) {
    console.error(`Ya existe el destino y no se sobrescribirá: ${destination}`);
    process.exit(1);
  }
  mkdirSync(dirname(destination), { recursive: true });
  renameSync(file, destination);
}

console.log(`Archivados ${unused.length} recursos en ${relative(projectRoot, archiveRoot)}/.`);
