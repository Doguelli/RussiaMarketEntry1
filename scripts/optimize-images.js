// Writes WebP variants next to every raster image in dist/ (outside /admin):
//   <name>.<ext>.<width>.webp  for each width in RESPONSIVE_WIDTHS.
// src/components/ResponsiveImage.tsx relies on these existing for every local
// .png/.jpg/.jpeg, so variants are always written — never upscaled, a smaller
// original is simply re-encoded at its own width. The originals stay in place
// for og:image, Decap CMS and as the <img> fallback.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(__dirname, "..", "dist");

export const RESPONSIVE_WIDTHS = [640, 1024, 1600];
const RASTER = /\.(png|jpe?g)$/i;

function collect(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!["admin", "assets", "server"].includes(entry.name)) collect(full, out);
    } else if (RASTER.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

const files = collect(dist);
let before = 0;
let after = 0;

for (const file of files) {
  const input = fs.readFileSync(file);
  before += input.length;
  let width;
  try {
    width = (await sharp(input).metadata()).width;
  } catch (error) {
    console.warn(`optimize-images: skipped unreadable ${path.relative(dist, file)} (${error.message})`);
    continue;
  }
  for (const target of RESPONSIVE_WIDTHS) {
    const output = await sharp(input)
      .resize({ width: Math.min(target, width), withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer();
    fs.writeFileSync(`${file}.${target}.webp`, output);
    if (target === RESPONSIVE_WIDTHS.at(-1)) after += output.length;
  }
}

console.log(
  `optimize-images: ${files.length} images, largest variants ${Math.round(after / 1024 / 1024)}MB vs originals ${Math.round(before / 1024 / 1024)}MB`
);
