'use client'
import { useEffect, useState } from 'react';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import { Lexend } from 'next/font/google'
import { Providers } from './providers';
import Script from 'next/script';

const lexend = Lexend({
  style: ['normal'],
  weight: ['400'],
  subsets: ['latin']
})

export default function RootLayout(props) {
  const { children } = props
  return (
    <html suppressHydrationWarning> 
      <body className={lexend.className}>
        <Providers>
          <NavBar/>
          {children}
          <Footer/>
        </Providers>


            {/* Chat Widget Script */}
            <chat-widget
          env="prod"
          project-id="d2f79889-b34b-4e1c-8952-51931e5c9871"
        />
        <Script
          crossOrigin="anonymous"
          src="https://cdn.apollo.kayeai.com/js/chat-widget.js"
          type="module"
        />
      </body>
    </html>
  )
}
