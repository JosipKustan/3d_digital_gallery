// Converts JPG / PNG / WebP images to WebP, capped at a maximum size, and names
// them NAME-WIDTHxHEIGHT.webp. The gallery reads image dimensions from that
// part of the name (src/components/shared/hooks/useImageDimensions.js).
//
//   npm run images -- <file or folder> [more...] [--out <folder>] [--max 2560] [--quality 80]
//
// A folder converts the images directly inside it (not subfolders).
// Default output is a webp/big/ folder next to each input file, which matches
// the gallery layout: works/<Project>/webp/big/<Name>-<W>x<H>.webp
// Originals are never modified or deleted.
import { mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const opts = { out: null, max: 2560, quality: 80 };
const inputs = [];
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--out") opts.out = args[++i];
  else if (args[i] === "--max") opts.max = Number(args[++i]);
  else if (args[i] === "--quality") opts.quality = Number(args[++i]);
  else inputs.push(args[i]);
}

if (inputs.length === 0) {
  console.error(
    "Usage: npm run images -- <file or folder> [...] [--out <folder>] [--max 2560] [--quality 80]",
  );
  process.exit(1);
}

const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;
const files = inputs.flatMap((input) =>
  statSync(input).isDirectory()
    ? readdirSync(input)
        .filter((name) => IMAGE_EXT.test(name))
        .map((name) => path.join(input, name))
    : [input],
);

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`.padStart(9);
let before = 0;
let after = 0;

// macOS ignores letter case but Netlify does not: reuse an existing "Webp" or
// "webp" folder under its real name, so the path written in siteContent.js
// matches what the server has.
function defaultOutDir(file) {
  const dir = path.dirname(file);
  const existing = readdirSync(dir).find(
    (name) => name.toLowerCase() === "webp" && statSync(path.join(dir, name)).isDirectory(),
  );
  return path.join(dir, existing ?? "webp", "big");
}

for (const file of files) {
  const outDir = opts.out ?? defaultOutDir(file);
  mkdirSync(outDir, { recursive: true });

  // Drop an existing -WxH suffix and characters that are awkward in URLs
  const base = path
    .basename(file, path.extname(file))
    .replace(/-\d+x\d+$/, "")
    .replace(/\s+/g, "_")
    .replace(/['"()]/g, "");

  const { data, info } = await sharp(file)
    .rotate() // apply camera EXIF orientation before the metadata is dropped
    .resize({
      width: opts.max,
      height: opts.max,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: opts.quality })
    .toBuffer({ resolveWithObject: true });

  const outFile = path.join(outDir, `${base}-${info.width}x${info.height}.webp`);
  if (path.resolve(outFile) === path.resolve(file)) {
    console.log(`skipped, output would overwrite the input: ${file}`);
    continue;
  }

  writeFileSync(outFile, data);
  const size = statSync(file).size;
  before += size;
  after += data.length;
  console.log(`${kb(size)} -> ${kb(data.length)}  ${outFile}`);
}

if (files.length > 1) {
  console.log(`\nTotal: ${kb(before).trim()} -> ${kb(after).trim()}`);
}
