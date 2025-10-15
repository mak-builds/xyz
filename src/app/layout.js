import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "xyz",
  description: "xyz is a modern web application built with Next.js",
  keywords: ["xyz", "xyz app", "xyz webapp", "xyz nextjs"],
  openGraph: {
    title: "xyz",
    description: "The official website of xyz – a new kind of web app.",
    url: "https://xyz.vercel.app", // your actual domain
    siteName: "xyz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "xyz preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "xyz",
    description: "Discover xyz – a modern web experience built with Next.js.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://xyz.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
