import type { Dictionary } from "@/i18n/dictionaries";
import type { Project } from "@/data/types";
import { ProjectCard } from "./childs/ProjectCard";
import { TechChip } from "./childs/TechChip";

type ProjectBriefProps = { t: Dictionary["proyecto"] } & Pick<
  Project,
  "summary" | "challenge" | "kind" | "role" | "period" | "team" | "stack"
>;

export const ProjectBrief = ({
  t,
  summary,
  challenge,
  kind,
  role,
  period,
  team,
  stack,
}: ProjectBriefProps) => (
  <section id="la-mision" className="w-full px-6 pt-14 pb-6 sm:pt-25 sm:pb-10">
    {/* En escritorio el relato ocupa la columna ancha y la ficha se lee al
        costado, como los datos de una partida junto a su historia. */}
    <div className="mx-auto grid max-w-300 items-start gap-10 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-16">
      <div>
        <h2 className="font-comic text-4xl text-main-text sm:text-5xl">
          {t.mision}
        </h2>
        <p className="mt-6 text-lg text-secondary-text">{summary}</p>

        <h3 className="mt-10 text-2xl font-bold text-main-text">{t.reto}</h3>
        {challenge
          .split("\n")
          .map((parrafo) => parrafo.trim())
          .filter(Boolean)
          .map((parrafo) => (
            <p key={parrafo} className="mt-3 text-lg text-secondary-text">
              {parrafo}
            </p>
          ))}

        <h3 className="mt-10 text-2xl font-bold text-main-text">{t.stack}</h3>
        <p className="mt-3 text-lg text-secondary-text">
          {t.stackTexto}
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {stack.map((tech) => (
            <TechChip key={tech} name={tech} />
          ))}
        </ul>
      </div>

      <ProjectCard t={t.ficha} kind={kind} role={role} period={period} team={team} />
    </div>
  </section>
);
