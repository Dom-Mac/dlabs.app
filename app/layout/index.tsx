import { AppWrapper, WalletProvider } from "./context"
import { AppLayout } from "./components"
import "../../styles/global/styles.css"

import { Space_Mono } from "@next/font/google"
import Script from "next/script"

const font = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap"
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <head />
      <body>
        {/* <ThemeProvider
          attribute="class"
          storageKey="nightwind-mode"
          defaultTheme="dark"
        > */}
        <WalletProvider>
          <AppWrapper>
            <AppLayout>{children}</AppLayout>
          </AppWrapper>
        </WalletProvider>
        {/* </ThemeProvider> */}

        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  )
}
