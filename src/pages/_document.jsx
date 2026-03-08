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

          {/* Open Graph base */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://creativestudiokuki.com" />
          <meta
            property="og:image"
            content="https://creativestudiokuki.com/assets/images/Logos/OSLinkImage.png"
          />
          <meta property="og:site_name" content="Creative Studio Kuki" />

          {/* Twitter Card base */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://creativestudiokuki.com/assets/images/Logos/OSLinkImage.png"
          />

          {/* Schema.org structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Creative Studio Kuki",
                description:
                  "Handcrafted personalised miniature art, unique gifts, wedding keepsakes, and business awards.",
                url: "https://creativestudiokuki.com",
                image:
                  "https://creativestudiokuki.com/assets/images/Logos/OSLinkImage.png",
                founder: { "@type": "Person", name: "Josip Kuštan" },
                sameAs: [],
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
          {/* Hidden form for Netlify's build-time form detection */}
          <form name="commission" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <select name="type"><option value="personal-gift" /></select>
            <textarea name="message" />
            <input name="bot-field" />
          </form>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
