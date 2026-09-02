import { SITE_NAME, SITE_URL } from "@/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LOCALES, localePath, type Locale } from "@/i18n/config";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ppMondwest = localFont({
  src: "../fonts/ppmondwest-regular.woff2",
  variable: "--font-mondwest-raw",
  display: "swap",
});

const ppNeueBit = localFont({
  src: "../fonts/ppneuebit-bold.woff2",
  variable: "--font-neuebit-raw",
  display: "swap",
});

const pressStart = localFont({
  src: "../fonts/pressStart2P.woff2",
  variable: "--font-press-start-raw",
  display: "swap",
});

// Cada idioma se prerenderiza: son dos, y su contenido es estático.
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata(
  props: LayoutProps<"/[lang]">,
): Promise<Metadata> {
  const { lang } = await props.params;
  const t = await getDictionary(lang as Locale);
  const url = localePath(lang as Locale);

  return {
    // Sin `metadataBase` las URLs relativas de Open Graph quedan relativas, y
    // las redes las descartan: no habria imagen al compartir.
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    alternates: {
      canonical: url,
      // `hreflang` le dice a Google que son la misma pagina en dos idiomas y
      // no contenido duplicado.
      languages: Object.fromEntries(
        LOCALES.map((l) => [l, localePath(l)]),
      ),
    },
    openGraph: {
      type: "website",
      locale: t.meta.ogLocale,
      url,
      siteName: SITE_NAME,
      title: t.meta.title,
      description: t.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} ${ppMondwest.variable} ${ppNeueBit.variable} ${pressStart.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
