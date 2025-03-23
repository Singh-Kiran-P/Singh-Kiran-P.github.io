import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PlausibleProvider from 'next-plausible'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Singh Kiran | Data Scientist & Software Engineer",
  description:
    "Portfolio of Singh Kiran, a data scientist and software engineer specializing in machine learning, algorithmic solutions, and impactful applications.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
<head>
<PlausibleProvider domain="kscode.eu" trackLocalhost={true} enabled={true} customDomain="https://analytics.kscode.eu" />

</head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  
  )
}



import './globals.css'