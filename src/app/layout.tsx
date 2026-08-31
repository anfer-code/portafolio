import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/config";
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

const pressStart = localFont({
  src: "./fonts/pressStart2P.woff2",
  variable: "--font-press-start-raw",
  display: "swap",
});

export const metadata: Metadata = {
  // Sin `metadataBase` las URLs relativas de Open Graph quedan relativas, y las
  // redes las descartan: no habria imagen al compartir.
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${ppMondwest.variable} ${ppNeueBit.variable} ${pressStart.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
