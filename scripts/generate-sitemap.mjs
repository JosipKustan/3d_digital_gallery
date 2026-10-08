// Writes public/sitemap.xml from the page list below and src/data/siteContent.js.
// Runs automatically before every `npm run build` (the "prebuild" script).
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { GALLERY_CATEGORIES, galleryWorks } from "../src/data/siteContent.js";

const SITE = "https://creativestudiokuki.com";

// Hand-written pages. Add new top-level pages here.
const STATIC_PAGES = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/gallery", changefreq: "weekly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "yearly", priority: "0.7" },
  { path: "/price-factors", changefreq: "monthly", priority: "0.7" },
  { path: "/portfolio", changefreq: "monthly", priority: "0.6" },
  { path: "/legal", changefreq: "yearly", priority: "0.3" },
];

// Empty categories are left out so search engines do not index blank pages.
// They appear here as soon as a project is added to them.
const categoryPages = GALLERY_CATEGORIES.filter((cat) =>
  galleryWorks.some((work) => work.category === cat.slug),
).map((cat) => ({
  path: `/gallery/${cat.slug}`,
  changefreq: "weekly",
  priority: "0.8",
}));

const projectPages = galleryWorks.map((work) => ({
  path: `/gallery/${work.category}/${work.slug}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const threeDPages = galleryWorks
  .filter((work) => work.link)
  .map((work) => ({ path: work.link, changefreq: "yearly", priority: "0.5" }));

const pages = [...STATIC_PAGES, ...categoryPages, ...projectPages, ...threeDPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const outFile = fileURLToPath(new URL("../public/sitemap.xml", import.meta.url));
writeFileSync(outFile, xml);
console.log(`sitemap.xml: ${pages.length} URLs`);
