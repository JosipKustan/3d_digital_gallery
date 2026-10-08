import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content="Josip Kuštan" />
          <meta
            name="keywords"
            content="miniature art, personalised gifts, handcrafted art, custom miniatures, wedding gifts, anniversary gifts, business awards, creative studio, Kuki, Josip Kuštan, unique gifts, 3D gallery"
          />

          {/* Open Graph and Twitter base. Page-specific tags (url, image,
              title, description) come from components/shared/SEO.jsx */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Creative Studio Kuki" />
          <meta name="twitter:card" content="summary_large_image" />

          {/* Schema.org structured data. Organization, not LocalBusiness:
              LocalBusiness needs a street address to be valid for Google.
              Add social profile URLs to sameAs when they exist. */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://creativestudiokuki.com/#organization",
                name: "Creative Studio Kuki",
                description:
                  "Handcrafted personalised miniature art, unique gifts, wedding keepsakes, and business awards.",
                url: "https://creativestudiokuki.com",
                logo: "https://creativestudiokuki.com/assets/images/Logos/OSLinkImage.png",
                image:
                  "https://creativestudiokuki.com/assets/images/Logos/OSLinkImage.png",
                address: { "@type": "PostalAddress", addressCountry: "HR" },
                founder: { "@type": "Person", name: "Josip Kuštan" },
              }),
            }}
          />

          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Kanit:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
