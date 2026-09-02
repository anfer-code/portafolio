import { loadStar, OgCard, OG_SIZE } from "@/components/OgCard/OgCard";
import { LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ImageResponse } from "next/og";

export const alt = "Anfernee Valera — Frontend Engineer";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang as Locale);

  return new ImageResponse(
    (
      <OgCard
        starSrc={await loadStar()}
        eyebrow={lang === "en" ? "Portfolio" : "Portafolio"}
        title="Anfernee Valera"
        subtitle={t.meta.description}
      />
    ),
    size,
  );
}
