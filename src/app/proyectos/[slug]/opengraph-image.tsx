import { loadStar, OgCard, OG_SIZE } from "@/components/OgCard/OgCard";
import { getProject, projects } from "@/data/projects";
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
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

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
