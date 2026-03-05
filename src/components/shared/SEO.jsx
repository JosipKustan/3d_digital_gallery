import { Helmet } from "react-helmet-async";

export function SEO({ title, description }) {
  const fullTitle = `${title} | Creative Studio Kuki`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
