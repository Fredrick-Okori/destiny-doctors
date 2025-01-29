// app/layout.js
'use client'
import NavBar from "@/components/navbar"
import { Providers } from "./providers"
import Footer from "@/components/footer"
import { Lexend } from 'next/font/google'

const lexend = Lexend({
  family: 'Neuton',
  style: ['normal'],
  weight: [  '400'],
  subsets: ['latin']

})



export default function RootLayout(props) {
  const { children } = props
  return (
    <html suppressHydrationWarning > {/* Apply the Inter font class */}
      <body className={lexend.className}>
        <Providers>
          <NavBar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
