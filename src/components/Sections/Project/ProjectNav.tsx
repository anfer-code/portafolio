import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import type { Project } from "@/data/types";
import Link from "next/link";

type ProjectNavProps = {
  t: Dictionary["proyecto"];
  locale: Locale;
  previous?: Project;
  next?: Project;
};

type NavCardProps = {
  t: Dictionary["proyecto"];
  locale: Locale;
  project: Project;
  direction: "previous" | "next";
};

const NavCard = ({ t, locale, project, direction }: NavCardProps) => {
  const isNext = direction === "next";

  return (
    <Link
      href={localePath(locale, `/proyectos/${project.slug}`)}
      className={`glass group flex flex-1 items-center gap-4 rounded-xl bg-glass p-6 transition-transform duration-300 hover:-translate-y-1 ${
        isNext ? "sm:flex-row-reverse sm:text-right" : ""
      }`}
    >
      {/* El resplandor es fijo y no sale del `glow` del proyecto: en una fila
          donde conviven dos tarjetas, dos halos de colores distintos competían
          entre sí en vez de leerse como el mismo control repetido. */}
      <span
        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[#2A2A2A] shadow-[0_0_24px_#ffffffb3] transition-transform duration-300 group-hover:scale-105 dark:bg-accent dark:text-white dark:shadow-[0_0_24px_#9B51E066]"
      >
        {/* La flecha del sitio apunta arriba-derecha; se rota según el sentido. */}
        <ArrowIcon
          className={`size-6 ${isNext ? "rotate-45" : "rotate-[225deg]"}`}
          aria-hidden="true"
        />
      </span>

      <span>
        <span className="block font-press-start text-[10px] tracking-wider text-[#3A2410] uppercase dark:text-[#C9BCEF]">
          {isNext ? t.siguiente : t.anterior}
        </span>
        <span className="mt-1.5 block font-bold text-main-text">
          {project.title}
        </span>
      </span>
    </Link>
  );
};

export const ProjectNav = ({ t, locale, previous, next }: ProjectNavProps) => (
  <nav aria-label={t.otrosProyectos} className="w-full px-6 py-10 sm:py-14">
    <div className="mx-auto flex max-w-300 flex-col gap-4 sm:flex-row">
      {previous && (
        <NavCard t={t} locale={locale} project={previous} direction="previous" />
      )}
      {next && <NavCard t={t} locale={locale} project={next} direction="next" />}
    </div>
  </nav>
);
