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
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LOCALES } from "@/i18n/config";
import { getContent, projectSlugs } from "@/data/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Los proyectos son un arreglo estático: se prerenderizan todos y cualquier
// otro slug es un 404 directo, sin render bajo demanda.
export const dynamicParams = false;

export function generateStaticParams() {
  // El segmento de idioma también es dinámico: hay que enumerar la combinación
  // de los dos, o Next deja las páginas fuera del prerender.
  return LOCALES.flatMap((lang) =>
    projectSlugs.map((slug) => ({ lang, slug })),
  );
}

export async function generateMetadata(
  props: PageProps<"/[lang]/proyectos/[slug]">,
): Promise<Metadata> {
  const { lang, slug } = await props.params;
  const project = getContent(lang as Locale).projects.find(
    (item) => item.slug === slug,
  );

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
  props: PageProps<"/[lang]/proyectos/[slug]">,
) {
  const { lang, slug } = await props.params;
  const locale = lang as Locale;
  const t = await getDictionary(locale);
  const { projects } = getContent(locale);
  const index = projects.findIndex((item) => item.slug === slug);

  if (index === -1) notFound();

  const project = projects[index];
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <>
      {/* Fuera de la home el menú apunta a sus anclas, pero de vuelta en "/" */}
      <Header locale={locale} desdeProyecto />

      <ProjectHero
        t={t.proyecto}
        volverHref={`${localePath(locale)}#proyectos`}
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
          t={t.proyecto}
          summary={project.summary}
          challenge={project.challenge}
          kind={project.kind}
          role={project.role}
          period={project.period}
          team={project.team}
          stack={project.stack}
        />
        <ProjectContributions
          t={t.proyecto}
          contributions={project.contributions}
        />
      </LinesArea>

      {/* ...y cielo continuo para el cierre. */}
      <SkyArea>
        <ProjectImpact
          t={t.proyecto}
          headline={project.headline}
          metrics={project.metrics}
        />
        <ProjectShots t={t.proyecto} shots={project.shots} />
        <ProjectLearnings t={t.proyecto} learnings={project.learnings} />
        <ProjectNav
          t={t.proyecto}
          locale={locale}
          previous={previous}
          next={next}
        />
        <Cta locale={locale} />
        <Footer />
      </SkyArea>
    </>
  );
}
