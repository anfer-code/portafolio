import { Clouds } from "@/components/Clouds/Clouds";
import { projects } from "@/data/projects";
import { Card } from "./childs/Card";

export const Projects = () => (
  <section
    id="proyectos"
    className="relative min-h-[900px] overflow-hidden bg-[url('/img/light/small-bg.png')] bg-cover bg-center py-24 dark:bg-[url('/img/dark/small-bg.png')]"
  >
    <Clouds />

    <div className="relative z-10 mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <h2 className="max-w-md font-comic text-4xl text-main-text sm:text-5xl">
          Proyectos en los que he trabajado
        </h2>
        <p className="max-w-sm text-secondary-text">
          Cada proyecto me dejó algo: una técnica nueva, un problema que no
          había resuelto antes o una forma distinta de pensar el front-end.
          Estos son algunos de los que más disfruté construir.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);
