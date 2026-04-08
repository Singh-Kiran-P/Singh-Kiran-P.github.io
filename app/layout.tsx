import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PlausibleProvider from 'next-plausible'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata:Metadata = {
  title: "Expert Technical Services | AI, Machine Learning, Software Engineering & More",
  description: "Providing specialized services in data science, software engineering, machine learning, cybersecurity, DevOps, and open-source development. If you're facing an A+ problem, I'm the expert who can solve it and help drive revenue growth with innovative, customized solutions.",
  keywords: "AI services, machine learning, data science, software engineering, cybersecurity, DevOps, open-source development, technical expertise, revenue growth, complex problem-solving, customized solutions",
  applicationName: "KsCode"
};


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
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  
  )
}
