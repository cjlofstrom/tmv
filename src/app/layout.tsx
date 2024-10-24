import { Providers } from "@/components/providers"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"  // Make sure this import is present

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TMV",
  description: "Share and discover media links",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <main className="min-h-screen bg-background antialiased">
            {children}
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}