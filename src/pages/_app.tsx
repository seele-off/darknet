import { AppProps } from 'next/app';
import Head from 'next/head';

import {
  EColor,
} from '@enums/enums';

import { APP_NAME } from '@constants/seo';

import RootLayout from '@layouts/RootLayout';

import '@styles/normalize.css';
import '@styles/variables.css';
import '@styles/global.css';

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  const themeForMeta = true ? EColor.white : EColor.black;

  return (
    <RootLayout>
      <Head>
        <meta charSet="UTF-8" />
        <meta content="website" property="og:type" />
        <meta name="theme-color" content={themeForMeta} />
        <meta content={APP_NAME} name="twitter:site" />
        <meta content={APP_NAME} property="og:site_name" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </RootLayout>

  );
}

export default MyApp;
