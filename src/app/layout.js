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

// export const metadata = {
//   title: "xyz",
//   description: "xyz is a modern web application built with Next.js",
//   keywords: ["xyz", "xyz app", "xyz webapp", "xyz nextjs"],
//   openGraph: {
//     title: "xyz",
//     description: "The official website of xyz – a new kind of web app.",
//     url: "https://xyz-beta-umber.vercel.app",
//     siteName: "xyz",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "xyz preview",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "xyz",
//     description: "Discover xyz – a modern web experience built with Next.js.",
//     images: ["/og-image.png"],
//   },
//   metadataBase: new URL("https://xyz-beta-umber.vercel.app"),
// };

export const metadata = {
  title: "xyz – The Future of the Web, One Page at a Time",
  description:
    "Discover xyz – A minimal, SEO-optimized web app built with Next.js. It's not just a page; it's a statement.",
  metadataBase: new URL("https://xyz-beta-umber.vercel.app"),
  openGraph: {
    title: "xyz – The Future of the Web, One Page at a Time",
    description:
      "xyz is more than a demo – it's a vision of speed, simplicity, and style.",
    url: "https://xyz-beta-umber.vercel.app",
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
    title: "xyz – Next.js Web Simplicity",
    description: "Experience xyz – a minimal, powerful web experience.",
    images: ["/og-image.png"],
  },
  keywords: ["xyz", "xyz app", "nextjs", "minimal site", "seo demo"],
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
