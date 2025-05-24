import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="dark">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/assets/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/assets/images/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/assets/images/android-chrome-512x512.png" />

        {/* Web App Meta */}
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="KoxNotes" />
        <meta name="theme-color" content="#232530" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
