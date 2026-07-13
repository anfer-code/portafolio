import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ppMondwest = localFont({
  src: "./fonts/ppmondwest-regular.woff2",
  variable: "--font-mondwest-raw",
  display: "swap",
});

const ppNeueBit = localFont({
  src: "./fonts/ppneuebit-bold.woff2",
  variable: "--font-neuebit-raw",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anfernee Valera — Frontend Engineer",
  description: "Portafolio de Anfernee Valera, Frontend Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ppMondwest.variable} ${ppNeueBit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
