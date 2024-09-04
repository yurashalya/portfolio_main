import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

import SeoImage from "../public/assets/photo-title.png";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
});

export const contentType = "/assets/photo-title.png";

export const metadata: Metadata = {
  title: "Yurii Shalia",
  description: "Main site by Shalia",
  authors: [{ name: "Yurii Shalia" }],
  openGraph: {
    title: "Yurii Shalia main site",
    description: "Welcome to my site",
    url: "https://yurii-shalia.vercel.app",
    siteName: "Yurii Shalia",
    images: [
      {
        url: SeoImage.src,
        width: SeoImage.width,
        height: SeoImage.height,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <Toaster />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
