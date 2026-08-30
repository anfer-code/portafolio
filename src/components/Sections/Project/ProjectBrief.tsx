import type { Project } from "@/data/projects";
import { ProjectCard } from "./childs/ProjectCard";
import { TechChip } from "./childs/TechChip";

type ProjectBriefProps = Pick<
  Project,
  "summary" | "challenge" | "kind" | "role" | "period" | "team" | "stack"
>;

export const ProjectBrief = ({
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
          La misión
        </h2>
        <p className="mt-6 text-lg text-secondary-text">{summary}</p>

        <h3 className="mt-10 text-2xl font-bold text-main-text">El reto</h3>
        <p className="mt-3 text-lg text-secondary-text">{challenge}</p>

        <h3 className="mt-10 text-2xl font-bold text-main-text">Stack</h3>
        <p className="mt-3 text-lg text-secondary-text">
          Las herramientas con las que se construyó el proyecto.
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {stack.map((tech) => (
            <TechChip key={tech} name={tech} />
          ))}
        </ul>
      </div>

      <ProjectCard kind={kind} role={role} period={period} team={team} />
    </div>
  </section>
);
