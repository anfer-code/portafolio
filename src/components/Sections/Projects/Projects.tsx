import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Clouds } from "@/components/Clouds/Clouds";
import { getContent } from "@/data/content";
import { Card } from "./childs/Card";

export const Projects = async ({ locale }: { locale: Locale }) => {
  const t = await getDictionary(locale);
  const { projects } = getContent(locale);

  return (
  <section
    id="proyectos"
    className="relative min-h-[900px] overflow-hidden bg-[url('/img/light/small-bg.png')] bg-cover bg-center py-24 dark:bg-[url('/img/dark/small-bg.png')]"
  >
    <Clouds />

    <div className="relative z-10 mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <h2 className="max-w-md font-comic text-4xl text-main-text sm:text-5xl">
          {t.proyectos.titulo}
        </h2>
        <p className="max-w-sm text-secondary-text">{t.proyectos.intro}</p>
      </div>

      {/* La grilla sigue a la cantidad de proyectos publicados: con tres o mas
          van en fila de tres a lo ancho; con dos, dos columnas centradas y algo
          mas angostas, para que las portadas no crezcan por encima de su tamano
          real y la seccion no quede con el hueco de la tercera. */}
      <div
        className={`mt-16 grid grid-cols-1 gap-6 ${
          projects.length > 2
            ? "md:grid-cols-3"
            : "mx-auto max-w-4xl md:grid-cols-2"
        }`}
      >
        {projects.map((project) => (
          <Card key={project.title} locale={locale} {...project} />
        ))}
      </div>
    </div>
  </section>
);
};
