import { loadStar, OgCard, OG_SIZE } from "@/components/OgCard/OgCard";
import { getProject, projectSlugs } from "@/data/content";
import { LOCALES, type Locale } from "@/i18n/config";
import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";

export const alt = "Proyecto de Anfernee Valera";
export const size = OG_SIZE;
export const contentType = "image/png";

// Sin esto la imagen de cada proyecto se generaria a demanda en una funcion:
// como los proyectos son un arreglo estatico, se prerenderizan en el build igual
// que sus paginas.
export const dynamicParams = false;

export function generateStaticParams() {
  // El segmento de idioma también es dinámico: hay que enumerar la combinación
  // de los dos, o Next deja las páginas fuera del prerender.
  return LOCALES.flatMap((lang) =>
    projectSlugs.map((slug) => ({ lang, slug })),
  );
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const project = getProject(lang as Locale, slug);

  if (!project) notFound();

  return new ImageResponse(
    (
      <OgCard
        starSrc={await loadStar()}
        eyebrow={project.kind}
        title={project.title}
        subtitle={project.tagline}
        // Cada proyecto pinta la barra con su propio color de resplandor.
        accent={project.glow}
      />
    ),
    size,
  );
}
