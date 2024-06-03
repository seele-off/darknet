/* eslint-disable max-len */
import {
  Html, Head, Main, NextScript,
} from 'next/document';
import Script from 'next/script';

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

        <Script id="metrika-counter" strategy="afterInteractive">
            {`(function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
               m[i].l=1*new Date();
               for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
               k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
               (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

               ym(97463564, "init", {
                     clickmap:true,
                     trackLinks:true,
                     accurateTrackBounce:true
               });`
            }
          </Script>

          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/97463564"
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
              />
            </div>
          </noscript>
      </body>
    </Html>
  );
}
