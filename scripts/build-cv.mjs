// Builds public/assets/PDF/Josip_Kustan_CV.pdf from cv/cv.json.
// Run by hand with `npm run cv` (needs Google Chrome; not part of the site build).
//
// The PDF has to survive ATS parsers that read text in content-stream order,
// so the layout stays a single column in DOM order: no position, float, grid
// or reordering, and every heading is a real <h1>-<h3> so the PDF gets tags.
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const OUT_HTML = join(ROOT, "cv/.build/cv.html");
const OUT_PDF = join(ROOT, "public/assets/PDF/Josip_Kustan_CV.pdf");
const CHROME =
  process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const cv = JSON.parse(readFileSync(join(ROOT, "cv/cv.json"), "utf8"));

const esc = (s = "") =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

/** "2026-03" -> "03/2026"; missing end date -> "Present". */
const date = (iso) => (iso ? `${iso.slice(5, 7)}/${iso.slice(0, 4)}` : "Present");
const dates = (item) => `${date(item.startDate)} – ${date(item.endDate)}`;

/** Visible link text without the protocol, so parsers see a readable URL. */
const shortUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const list = (items = []) =>
  items.length ? `<ul>${items.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : "";

const details = (items = []) =>
  items.map((d) => `<p><strong>${esc(d.label)}:</strong> ${esc(d.text)}</p>`).join("");

const job = (w) => `
  <section class="entry">
    <h3>${esc(w.position)}</h3>
    <p class="org">${esc(w.name)}${w.location ? `, ${esc(w.location)}` : ""}</p>
    <p class="dates">${dates(w)}</p>
    ${w.summary ? `<p>${esc(w.summary)}</p>` : ""}
    ${list(w.highlights)}
    ${(w.roles ?? []).map((r) => `<h4>${esc(r.position)}</h4>${list(r.highlights)}`).join("")}
    ${details(w.details)}
  </section>`;

const school = (e) => `
  <section class="entry">
    <h3>${esc(e.studyType)}</h3>
    <p class="org">${esc(e.institution)}</p>
    <p class="dates">${dates(e)}</p>
    <p>${esc(e.score)}</p>
    <p>${esc(e.thesis)}</p>
  </section>`;

const { basics } = cv;
const contact = [
  esc(basics.location),
  `<a href="tel:${basics.phone.replace(/\s/g, "")}">${esc(basics.phone)}</a>`,
  `<a href="mailto:${esc(basics.email)}">${esc(basics.email)}</a>`,
  ...basics.profiles.map((p) => `<a href="${esc(p.url)}">${esc(shortUrl(p.url))}</a>`),
].join(' <span class="sep">|</span> ');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(basics.name)} – CV</title>
<meta name="author" content="${esc(basics.name)}">
<style>
  @page { size: A4; margin: 14mm 16mm; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  /* Helvetica Neue, not the site's Inter: Inter's contextual alternates turn "(",
     "+" and "–" into private-use characters, and Apple's PDF reader splits words
     set in it. Helvetica Neue reads cleanly in pypdf, pdfminer, pdf.js and PDFKit. */
  body { margin: 0; font: 9.6pt/1.42 "Helvetica Neue", Helvetica, Arial, sans-serif; color: #111;
         font-variant-ligatures: none; }
  a { color: inherit; text-decoration: none; }
  p { margin: 0; }
  header { text-align: center; margin-bottom: 10pt; }
  h1 { margin: 0; font-size: 24pt; line-height: 1.1; font-weight: 800; color: #560289; text-transform: uppercase; }
  .label { font-size: 11pt; font-weight: 600; margin-top: 3pt; }
  .contact { margin-top: 4pt; }
  .sep { color: #999; padding: 0 3pt; }
  h2 { margin: 12pt 0 4pt; font-size: 17pt; line-height: 1.15; font-weight: 800; color: #560289; }
  h2, h3, h4 { break-after: avoid-page; }
  section.block { break-inside: avoid-page; }
  h3 { margin: 0; font-size: 11pt; font-weight: 600; color: #560289; }
  h4 { margin: 4pt 0 0; font-size: 9.6pt; font-weight: 700; }
  .entry { margin-bottom: 8pt; break-inside: avoid-page; }
  .org { font-weight: 700; }
  .dates { font-style: italic; }
  ul { margin: 1pt 0 2pt; padding-left: 13pt; }
  li { margin: 0.5pt 0; }
  .inline p { margin-bottom: 2pt; }
</style>
</head>
<body>
<header>
  <h1>${esc(basics.name)}</h1>
  <p class="label">${esc(basics.label)}</p>
  <p class="contact">${contact}</p>
</header>
<main>
  <h2>Experience</h2>
  ${cv.work.map(job).join("")}
  <section class="block">
    <h2>Education</h2>
    ${cv.education.map(school).join("")}
  </section>
  <section class="block inline">
    <h2>Languages</h2>
    ${cv.languages.map((l) => `<p><strong>${esc(l.language)}:</strong> ${esc(l.fluency)}</p>`).join("")}
  </section>
  <section class="block inline">
    <h2>Hobbies &amp; Interests</h2>
    ${cv.interests.map((i) => `<p><strong>${esc(i.name)}:</strong> ${esc(i.text)}</p>`).join("")}
  </section>
</main>
</body>
</html>
`;

mkdirSync(join(ROOT, "cv/.build"), { recursive: true });
writeFileSync(OUT_HTML, html);

// A throwaway profile keeps headless Chrome away from the user's open browser.
const profile = mkdtempSync(join(tmpdir(), "cv-chrome-"));
try {
  execFileSync(CHROME, [
    "--headless",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    `--user-data-dir=${profile}`,
    "--no-pdf-header-footer",
    "--generate-pdf-document-outline",
    `--print-to-pdf=${OUT_PDF}`,
    pathToFileURL(OUT_HTML).href,
  ], { stdio: "pipe" });
} finally {
  rmSync(profile, { recursive: true, force: true });
}

console.log(`CV written to ${OUT_PDF}`);
