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

export const metadata: Metadata = {
  title: "Yurii Shalia",
  description: "Main site by Shalia",
  applicationName: "Yurii Shalia",
  openGraph: {
    title: "Yurii Shalia main site",
    description: "Welcome to my site",
    url: "https://yurii-shalia.vercel.app",
    images: [
      {
        url: "/assets/photo-title.jpg",
        width: 800,
        height: 600,
        alt: "Yurii Shalia",
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
