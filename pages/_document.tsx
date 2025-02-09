// In your _document.js (or _app.js if you prefer)
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Viewport meta tag for mobile responsiveness */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1"
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

export default MyDocument;
