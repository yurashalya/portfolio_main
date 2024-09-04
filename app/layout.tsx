import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

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
  openGraph: {
    title: "Main site by Yurii Shalia, welcome",
    description:
      "Welcome to my website, here you can read basic information and contact me.",
    url: "https://yurii-shalia.vercel.app",
    siteName: "Yurii Shalia",
    images: [
      {
        url: "https://yurii-shalia.vercel.app/assets/photo-title.png",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    site: "https://yurii-shalia.vercel.app",
    title: "Yurii Shalia",
    description:
      "Welcome to my website, here you can read basic information and contact me.",
    images: ["https://yurii-shalia.vercel.app/assets/photo-title.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <Toaster />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
