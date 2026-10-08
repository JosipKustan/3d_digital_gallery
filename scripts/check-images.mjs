// Fails the build when an image path used by the site does not exist in public/
// with exactly that spelling. macOS ignores letter case ("Webp" == "webp"),
// Netlify does not, so a wrong case works locally and breaks in production.
// Runs automatically before every `npm run build` (the "prebuild" script).
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as siteContent from "../src/data/siteContent.js";

const root = fileURLToPath(new URL("..", import.meta.url));
const publicDir = path.join(root, "public");
const ASSET = /\/assets\/[^"'`)\s]+\.(?:webp|jpe?g|png|gif|svg|avif|glb)/gi;

// 1. Every /assets/ string in the live siteContent data (commented-out entries are ignored)
const used = new Map(); // path -> where it is used
JSON.stringify(siteContent).match(ASSET)?.forEach((p) => used.set(p, "src/data/siteContent.js"));

// 2. Every /assets/ string literal in the other source files
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return /\.(jsx?|mjs)$/.test(entry.name) ? [full] : [];
  });
}
for (const file of walk(path.join(root, "src"))) {
  if (file.endsWith(path.join("data", "siteContent.js"))) continue;
  readFileSync(file, "utf8")
    .match(ASSET)
    ?.forEach((p) => used.set(p, path.relative(root, file)));
}

// Exact-case existence check, one path segment at a time
function existsExactly(relPath) {
  let dir = publicDir;
  for (const segment of relPath.split("/").filter(Boolean)) {
    let names;
    try {
      names = readdirSync(dir);
    } catch {
      return false;
    }
    if (!names.includes(segment)) return false;
    dir = path.join(dir, segment);
  }
  return statSync(dir).isFile();
}

const missing = [...used].filter(([p]) => !existsExactly(decodeURI(p)));

if (missing.length) {
  console.error(`check-images: ${missing.length} image path(s) not found in public/ (check spelling and letter case):`);
  for (const [p, where] of missing) console.error(`  ${p}   (${where})`);
  process.exit(1);
}
console.log(`check-images: ${used.size} image paths OK`);
