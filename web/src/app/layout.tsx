import type { Metadata } from "next"
import { inter, spaceGrotesk, jetbrainsMono } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "neostronghold — Intelligent homes, open to everyone.",
  description:
    "Premium smart home platform built on open-source technology. AI-powered home automation for South Africa, by South Africa.",
  keywords: [
    "smart home",
    "home automation",
    "South Africa",
    "Cape Town",
    "Home Assistant",
    "open source",
    "AI agent",
    "solar integration",
    "load shedding",
  ],
  openGraph: {
    title: "neostronghold — Intelligent homes, open to everyone.",
    description:
      "Premium smart home platform built on open-source technology. AI-powered home automation for South Africa.",
    siteName: "neostronghold",
    locale: "en_ZA",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
