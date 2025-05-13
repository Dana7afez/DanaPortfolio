import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import StarryBackground from "@/components/starry-background"
import CursorEffect from "@/components/cursor-effect"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dana Hafez | Software Engineer",
  description: "Professional portfolio of Dana Hafez, Software Engineer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#030014] text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CursorEffect />
          <StarryBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
