import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="keywords"
          content="数码影音，beats耳机，潮牌，音乐生活，食品，服饰配件，礼品，礼物，礼盒"
        />
        <meta name="description" content="这是基于next的练手云音乐商城" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
