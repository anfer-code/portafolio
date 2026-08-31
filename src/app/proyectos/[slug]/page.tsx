import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { LinesArea } from "@/components/LinesArea/LinesArea";
import { Cta } from "@/components/Sections/Cta/Cta";
import { ProjectBrief } from "@/components/Sections/Project/ProjectBrief";
import { ProjectContributions } from "@/components/Sections/Project/ProjectContributions";
import { ProjectHero } from "@/components/Sections/Project/ProjectHero";
import { ProjectImpact } from "@/components/Sections/Project/ProjectImpact";
import { ProjectLearnings } from "@/components/Sections/Project/ProjectLearnings";
import { ProjectNav } from "@/components/Sections/Project/ProjectNav";
import { ProjectShots } from "@/components/Sections/Project/ProjectShots";
import { SkyArea } from "@/components/SkyArea/SkyArea";
import { SITE_NAME } from "@/config";
import { projects } from "@/data/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Los proyectos son un arreglo estático: se prerenderizan todos y cualquier
// otro slug es un 404 directo, sin render bajo demanda.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/proyectos/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  const title = `${project.title} — ${SITE_NAME}`;
  const url = `/proyectos/${project.slug}`;

  return {
    title,
    description: project.tagline,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "es_ES",
      url,
      siteName: SITE_NAME,
      title,
      description: project.tagline,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage(
  props: PageProps<"/proyectos/[slug]">,
) {
  const { slug } = await props.params;
  const index = projects.findIndex((item) => item.slug === slug);

  if (index === -1) notFound();

  const project = projects[index];
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <>
      {/* Fuera de la home el menú apunta a sus anclas, pero de vuelta en "/" */}
      <Header navBase="/" />

      <ProjectHero
        title={project.title}
        tagline={project.tagline}
        kind={project.kind}
        role={project.role}
        duration={project.duration}
        live={project.live}
        imageLight={project.imageLight}
        imageDark={project.imageDark}
        glow={project.glow}
      />

      {/* Mismo ritmo de fondos que la home: cuadrícula para el contexto... */}
      <LinesArea>
        <ProjectBrief
          summary={project.summary}
          challenge={project.challenge}
          kind={project.kind}
          role={project.role}
          period={project.period}
          team={project.team}
          stack={project.stack}
        />
        <ProjectContributions contributions={project.contributions} />
      </LinesArea>

      {/* ...y cielo continuo para el cierre. */}
      <SkyArea>
        <ProjectImpact headline={project.headline} metrics={project.metrics} />
        <ProjectShots shots={project.shots} />
        <ProjectLearnings learnings={project.learnings} />
        <ProjectNav previous={previous} next={next} />
        <Cta />
        <Footer />
      </SkyArea>
    </>
  );
}
