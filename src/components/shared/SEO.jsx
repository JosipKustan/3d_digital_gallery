import Head from "next/head";

export const SITE_URL = "https://creativestudiokuki.com";
export const SITE_NAME = "Creative Studio Kuki";
const DEFAULT_IMAGE = "/assets/images/Logos/OSLinkImage.png";

/** Turns a site path ("/assets/...") into a full URL; full URLs pass through. */
export const absoluteUrl = (path) =>
  path.startsWith("http") ? path : `${SITE_URL}${encodeURI(path)}`;

/**
 * SEO: per-page head tags: title, description, canonical, Open Graph, Twitter.
 * Every page should render exactly one of these, so share previews and
 * canonical URLs always point at the page itself.
 * @param {string}  title           Full page title (one string, not JSX parts).
 * @param {string}  description     Meta description, ideally 120 to 160 chars.
 * @param {string}  path            Page path, e.g. "/gallery/places".
 * @param {string}  [image]         Share image path or URL. Site logo by default.
 * @param {string}  [ogTitle]       Share title if it should differ from title.
 * @param {string}  [ogDescription] Share description if it should differ.
 * @param {boolean} [noindex]       Keep the page out of search results.
 * @param {object|object[]} [jsonLd] Schema.org data rendered as JSON-LD.
 */
export function SEO({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  ogTitle = title,
  ogDescription = description,
  noindex = false,
  jsonLd,
}) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = absoluteUrl(image);
  const schemas = jsonLd ? [].concat(jsonLd) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}

/** Schema.org BreadcrumbList from [{ name, path }, ...]. */
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
