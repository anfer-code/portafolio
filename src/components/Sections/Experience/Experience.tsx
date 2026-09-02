import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getContent } from "@/data/content";
import { Star } from "./childs/Star/Star";
import { ExperienceCard } from "./childs/ExperienceCard";

export const Experience = async ({ locale }: { locale: Locale }) => {
  const t = await getDictionary(locale);
  const { experience } = getContent(locale);

  return (
  <section id="experiencia" className="px-6 pt-24 pb-16">
    <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
      {/* Columna izquierda: título + estrella. Acompaña el scroll de la sección. */}
      <div className="flex items-center gap-6 lg:sticky lg:top-40 lg:flex-col lg:items-start">
        <h2 className="font-comic text-4xl text-main-text sm:text-5xl">
          {t.experiencia.titulo}
        </h2>
        <Star />
      </div>

      {/* Columna derecha: las tarjetas, con ancho acotado */}
      <div className="flex w-full max-w-[750px] flex-col gap-8">
        {experience.map((job) => (
          <ExperienceCard key={`${job.company}-${job.period}`} {...job} />
        ))}
      </div>
    </div>
  </section>
);
};
