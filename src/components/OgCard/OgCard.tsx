import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Plantilla de la imagen que se ve al compartir el sitio (1200x630).
 *
 * No es un componente de React normal: lo renderiza Satori, dentro de
 * `ImageResponse`, y ese motor soporta un subconjunto de CSS. De ahí dos reglas
 * que hay que respetar al tocarlo:
 *
 * - Todo `div` con más de un hijo necesita `display: flex` explícito.
 * - No hay fuentes del sitio acá: los .woff2 del proyecto no le sirven a Satori,
 *   que solo lee TTF, OTF y WOFF. Se usa la tipografía por defecto y la jerarquía
 *   se arma con tamaño y color.
 */

/** Los mismos tonos del tema oscuro, en literal: Satori no lee variables CSS. */
const BG = "#1D1E30";
const TEXT = "#f5f3ff";
const MUTED = "#a6a0c3";

export const OG_SIZE = { width: 1200, height: 630 };

/** La estrella va embebida como data URI: Satori no resuelve rutas del sitio. */
export const loadStar = async () => {
  const star = await readFile(join(process.cwd(), "public/img/star.png"));
  return `data:image/png;base64,${star.toString("base64")}`;
};

type OgCardProps = {
  starSrc: string;
  title: string;
  subtitle: string;
  /** Línea corta sobre el título; en los proyectos, el tipo de proyecto. */
  eyebrow?: string;
  /** Color de la barra inferior. En los proyectos, el `glow` de cada uno. */
  accent?: string;
};

export const OgCard = ({
  starSrc,
  title,
  subtitle,
  eyebrow,
  accent = "#FFDE46",
}: OgCardProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
      height: "100%",
      background: BG,
      padding: "68px 80px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={starSrc} alt="" width={56} height={56} />
      <span style={{ color: MUTED, fontSize: 24, letterSpacing: 3 }}>
        anfervalera.com
      </span>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      {eyebrow && (
        <span
          style={{
            color: accent,
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          {eyebrow}
        </span>
      )}
      <span style={{ color: TEXT, fontSize: 82, lineHeight: 1.05 }}>
        {title}
      </span>
      <span
        style={{
          color: MUTED,
          fontSize: 32,
          lineHeight: 1.4,
          marginTop: 24,
          maxWidth: 900,
        }}
      >
        {subtitle}
      </span>
    </div>

    <div style={{ display: "flex", height: 8, width: 180, background: accent }} />
  </div>
);
