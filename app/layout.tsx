import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GameCraftUK - Traditional Wooden Games",
  description:
    "Discover the joy of traditional wooden games with GameCraftUK. Explore our collection of handcrafted wooden games including Pliko and more.",
  keywords: ["wooden games", "traditional games", "Pliko", "board games", "UK games", "GameCraftUK"],
  authors: [{ name: "GameCraftUK" }],
  creator: "GameCraftUK",
  publisher: "GameCraftUK",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
        <Toaster />
      </body>
    </html>
  )
}
