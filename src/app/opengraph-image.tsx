import { loadStar, OgCard, OG_SIZE } from "@/components/OgCard/OgCard";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/config";
import { ImageResponse } from "next/og";

export const alt = SITE_TITLE;
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <OgCard
        starSrc={await loadStar()}
        eyebrow="Portafolio"
        title="Anfernee Valera"
        subtitle={SITE_DESCRIPTION}
      />
    ),
    size,
  );
}
