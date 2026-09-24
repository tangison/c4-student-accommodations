/**
 * C4 brand asset finalization with sharp:
 * - copy real SVG logos to public
 * - rasterize icon SVG -> 32/192/512/apple-touch PNG + favicon
 * - build og-image 1200x630 from real photo + teal band + logo
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const BRAND = "/home/z/my-project/upload/brand-assets/C4-Brand-Assets";
const FILEBIN = "/home/z/my-project/upload/filebin";
const OUT = "/home/z/my-project/public";

async function main() {
  // 1. Real SVG logos
  fs.copyFileSync(`${BRAND}/Logo-Light/C4-full-logo.svg`, `${OUT}/c4-logo.svg`);
  fs.copyFileSync(`${BRAND}/Logo-Dark/C4-full-logo-ondark.svg`, `${OUT}/c4-logo-ondark.svg`);

  // 2. Icon rasterization from official SVG
  const iconSvg = `${BRAND}/Icon-Only/C4-icon.svg`;
  await sharp(iconSvg, { density: 300 }).resize(512, 512).png().toFile(`${OUT}/icon-512.png`);
  await sharp(iconSvg, { density: 300 }).resize(192, 192).png().toFile(`${OUT}/icon-192.png`);
  await sharp(iconSvg, { density: 300 }).resize(180, 180).png().toFile(`${OUT}/apple-touch-icon.png`);
  await sharp(iconSvg, { density: 300 }).resize(32, 32).png().toFile(`${OUT}/favicon-32x32.png`);

  // official favicon.ico
  fs.copyFileSync(`${BRAND}/Icon-Only/favicon.ico`, `${OUT}/favicon.ico`);

  // 3. OG image: real photo (garage with sign) 1200x630 + teal band + white logo
  const photo = await sharp(`${FILEBIN}/individual-photos/C4-Individual-Photos/08_Exterior_Wide_Garage.png`)
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .modulate({ saturation: 1.02 })
    .toBuffer();

  const band = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fade" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stop-color="#022E2E" stop-opacity="0.92"/>
          <stop offset="0.42" stop-color="#022E2E" stop-opacity="0.45"/>
          <stop offset="0.75" stop-color="#022E2E" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#fade)"/>
      <text x="64" y="516" font-family="DejaVu Sans, Arial, sans-serif" font-size="52" font-weight="800" fill="#FFFFFF">C4 Student Accommodations CC</text>
      <text x="64" y="566" font-family="DejaVu Sans, Arial, sans-serif" font-size="30" font-weight="600" fill="#C1A56D">2027 bookings now open, Windhoek</text>
    </svg>`);

  await sharp(photo).composite([{ input: band }]).jpeg({ quality: 82 }).toFile(`${OUT}/og-image.jpg`);

  // 4. remove replaced stock imagery + old AI logo files
  const remove = [
    ...glob(`${OUT}/images/*.jpg`),
    `${OUT}/logo.png`,
    `${OUT}/logo-ondark.png`,
  ];
  for (const f of remove) if (fs.existsSync(f)) fs.unlinkSync(f);
  if (fs.existsSync(`${OUT}/images`) && fs.readdirSync(`${OUT}/images`).length === 0) {
    fs.rmdirSync(`${OUT}/images`);
  }

  console.log("done");
  console.log(fs.readdirSync(OUT).join("\n"));
}

function glob(pattern) {
  const dir = path.dirname(pattern);
  const ext = path.extname(pattern);
  try { return fs.readdirSync(dir).filter(f => f.endsWith(ext)).map(f => `${dir}/${f}`); }
  catch { return []; }
}

main().catch(e => { console.error(e); process.exit(1); });
