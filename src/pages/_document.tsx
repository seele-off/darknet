/* eslint-disable max-len */
import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function MyDocument() {
  return (
    <Html lang="ru">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
