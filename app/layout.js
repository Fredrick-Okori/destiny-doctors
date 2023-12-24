import { Raleway } from 'next/font/google'
import './globals.css'


const raleway = Raleway({ subsets: ['latin'] })





// app/layout.js
import { Providers } from './providers';


export default function RootLayout({
  children
}) {
  return (
    <html lang='en' title='Destiny Doctors'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

