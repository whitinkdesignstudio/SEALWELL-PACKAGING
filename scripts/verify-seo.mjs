import fs from "node:fs";

const pages = [
  { file: ".next/server/app/index.html", path: "/" },
  { file: ".next/server/app/about.html", path: "/about" },
  { file: ".next/server/app/products.html", path: "/products" },
  { file: ".next/server/app/products/13-mm.html", path: "/products/13-mm" },
  { file: ".next/server/app/products/20-mm.html", path: "/products/20-mm" },
  { file: ".next/server/app/products/13-mm-flip-off-seal.html", path: "/products/13-mm-flip-off-seal" },
  { file: ".next/server/app/products/20-mm-flip-off-seal.html", path: "/products/20-mm-flip-off-seal" },
  { file: ".next/server/app/colours.html", path: "/colours" },
  { file: ".next/server/app/quality.html", path: "/quality" },
  { file: ".next/server/app/contact.html", path: "/contact" },
];

console.log("=== SEO AUDIT VERIFICATION ===");
let hasError = false;

for (const p of pages) {
  if (!fs.existsSync(p.file)) {
    console.error(`ERROR: File not found: ${p.file}`);
    hasError = true;
    continue;
  }

  const html = fs.readFileSync(p.file, "utf8");

  // Check canonical
  const canonMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  const canon = canonMatch ? canonMatch[1] : null;

  // Check og:image
  const ogImgMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
  const ogImg = ogImgMatch ? ogImgMatch[1] : null;

  // Check twitter:image
  const twImgMatch = html.match(/<meta name="twitter:image" content="([^"]+)"/);
  const twImg = twImgMatch ? twImgMatch[1] : null;

  // Check schemas
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => {
      try {
        return JSON.parse(m[1]);
      } catch (e) {
        return { error: e.message };
      }
    });

  console.log(`\nRoute: ${p.path}`);
  console.log(`  Canonical: ${canon}`);
  console.log(`  OG Image:  ${ogImg}`);
  console.log(`  TW Image:  ${twImg}`);
  console.log(`  Schemas:   ${schemas.map((s) => JSON.stringify(s["@type"])).join(", ")}`);

  if (!canon || !canon.startsWith("https://www.sealwellpackaging.com")) {
    console.error(`  FAIL: Invalid canonical: ${canon}`);
    hasError = true;
  }
  if (!ogImg || !ogImg.startsWith("https://www.sealwellpackaging.com")) {
    console.error(`  FAIL: Invalid og:image: ${ogImg}`);
    hasError = true;
  }
  if (canon.includes("chatgpt.site") || (ogImg && ogImg.includes("chatgpt.site"))) {
    console.error(`  FAIL: Staging domain detected!`);
    hasError = true;
  }
}

// Check robots.txt and sitemap.xml
const robotsTxt = fs.readFileSync(".next/server/app/robots.txt.body", "utf8");
console.log("\n=== ROBOTS.TXT ===");
console.log(robotsTxt.trim());
if (!robotsTxt.includes("https://www.sealwellpackaging.com/sitemap.xml")) {
  console.error("FAIL: robots.txt does not point to production sitemap!");
  hasError = true;
}

const sitemapXml = fs.readFileSync(".next/server/app/sitemap.xml.body", "utf8");
console.log("\n=== SITEMAP.XML PREVIEW ===");
console.log(sitemapXml.slice(0, 400) + "...");
if (sitemapXml.includes("chatgpt.site")) {
  console.error("FAIL: sitemap.xml contains staging domain!");
  hasError = true;
}

if (!hasError) {
  console.log("\n>>> ALL TECHNICAL SEO VERIFICATIONS PASSED! <<<");
} else {
  console.error("\n>>> SOME CHECKS FAILED! <<<");
  process.exit(1);
}
