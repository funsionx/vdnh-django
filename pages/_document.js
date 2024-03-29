import { 
  Html, 
  Head, 
  Main, 
  NextScript 
} from 'next/document'

export default function Document() {

  return (
    <Html lang="ru">  
    <Head>
      
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}