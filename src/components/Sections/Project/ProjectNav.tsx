import { ArrowIcon } from "@/components/icons/ArrowIcon";
import type { Project } from "@/data/projects";
import Link from "next/link";

type ProjectNavProps = {
  previous?: Project;
  next?: Project;
};

type NavCardProps = {
  project: Project;
  direction: "previous" | "next";
};

const NavCard = ({ project, direction }: NavCardProps) => {
  const isNext = direction === "next";

  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className={`glass group flex flex-1 items-center gap-4 rounded-xl bg-glass p-6 transition-transform duration-300 hover:-translate-y-1 ${
        isNext ? "sm:flex-row-reverse sm:text-right" : ""
      }`}
    >
      <span
        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[#2A2A2A] transition-transform duration-300 group-hover:scale-105 dark:bg-accent dark:text-white"
        style={{ boxShadow: `0 0 24px ${project.glow}66` }}
      >
        {/* La flecha del sitio apunta arriba-derecha; se rota según el sentido. */}
        <ArrowIcon
          className={`size-6 ${isNext ? "rotate-45" : "rotate-[225deg]"}`}
          aria-hidden="true"
        />
      </span>

      <span>
        <span className="block font-press-start text-[10px] tracking-wider text-[#3A2410] uppercase dark:text-[#C9BCEF]">
          {isNext ? "Siguiente" : "Anterior"}
        </span>
        <span className="mt-1.5 block font-bold text-main-text">
          {project.title}
        </span>
      </span>
    </Link>
  );
};

export const ProjectNav = ({ previous, next }: ProjectNavProps) => (
  <nav aria-label="Otros proyectos" className="w-full px-6 py-10 sm:py-14">
    <div className="mx-auto flex max-w-300 flex-col gap-4 sm:flex-row">
      {previous && <NavCard project={previous} direction="previous" />}
      {next && <NavCard project={next} direction="next" />}
    </div>
  </nav>
);
