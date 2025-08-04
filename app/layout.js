import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../src/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Shaikh Saim - Portfolio",
  description: "Full-Stack Software Developer | NFT & Web3 Enthusiast",
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



