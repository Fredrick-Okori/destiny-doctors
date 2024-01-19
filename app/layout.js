// app/layout.js
import Head from 'next/head'; // Import Head from 'next/head' to manage the document head
import { Providers } from './providers';
import './globals.css';

export default function RootLayout({
  children
}) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Destiny Doctors</title> {/* Set the title using <title> tag */}
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        {/* Add other meta tags, link tags, etc. as needed */}
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
