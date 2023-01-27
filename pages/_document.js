import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="GPT-3 Writer" key="title"/>
        <meta property="og:description" content="build with buildspace" key="description"/>
        <meta
          property="og:image"
          content="https://cdn.buildspace.so/courses/gpt3-writer/project-og.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <link rel="preload" href="https://www.violetverse.io/_next/static/css/d319ecee7268c79a.css" as="style"/>
        <link rel="stylesheet" href="https://www.violetverse.io/_next/static/css/d319ecee7268c79a.css" data-n-g=""/>
        <link rel="preload" href="https://www.violetverse.io/_next/static/css/8b173632210cad19.css" as="style"/>
        <link rel="stylesheet" href="https://www.violetverse.io/_next/static/css/8b173632210cad19.css" data-n-p=""/>
        <noscript data-n-css=""></noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
