import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../src/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Shaikh Saim - Portfolio",
  description: "Full-Stack Software Developer | Blockchain & Web3 Enthusiast",
  icons: {
    icon: "/s-logo.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}



