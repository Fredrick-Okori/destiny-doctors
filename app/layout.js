
import NavBar from "@/components/navbar"
import { Providers } from "./providers"
import Footer from "@/components/footer"

export default function RootLayout(props) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <NavBar/>
          {children}
          <Footer/>
          </Providers>
      </body>
    </html>
  )
}
