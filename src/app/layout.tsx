import "./globals.css"
import { Inter } from "next/font/google"
import Nav from "./Nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Resiklo Machine Shop",
  description: "We aim to promote recycling to everyone of all ages!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/7fe62f3f23.js"
          crossOrigin="anonymous"
          defer
        />
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
