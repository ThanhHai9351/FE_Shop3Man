import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import SalesNav from "@/components/header/SalesNav"
import { Suspense } from "react"
import AppProvider from "@/app/app_provider"
import { Toaster } from "@/components/ui/toaster"
import { cookies } from "next/headers"
import ChatButtonDialog from "@/shared/button/chat_button_dialog"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookiesStore = await cookies()
  const accessToken = cookiesStore.get("accessToken")?.value || ""
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppProvider initialSessionToken={accessToken}>
          <Suspense fallback={<div>Loading</div>}>
            <SalesNav />
            <Header />
            {children}
            <Footer />
            <ChatButtonDialog />
            <Toaster />
          </Suspense>
        </AppProvider>
      </body>
    </html>
  )
}
