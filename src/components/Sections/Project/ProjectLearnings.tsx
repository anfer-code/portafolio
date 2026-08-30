import { PixelPanel } from "@/components/PixelPanel/PixelPanel";
import { Note } from "@/components/Sections/Stack/childs/Note";
import type { Learning } from "@/data/projects";

type ProjectLearningsProps = {
  learnings: Learning[];
};

export const ProjectLearnings = ({ learnings }: ProjectLearningsProps) => (
  <section id="aprendizajes" className="w-full px-6 py-10 sm:py-14">
    <div className="mx-auto max-w-300">
      <h2 className="font-comic text-4xl text-main-text sm:text-5xl">
        Lo que me llevo
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-secondary-text">
        Toca una nota para leerla completa.
      </p>

      {/* Mismas notas del tablero de la home: aquí cuentan lo aprendido en este proyecto */}
      <PixelPanel className="mt-10 grid grid-cols-2 justify-items-center gap-6 p-8 sm:grid-cols-4">
        {learnings.map((learning, i) => (
          <Note key={learning.title} {...learning} delay={`${i * 0.45}s`} />
        ))}
      </PixelPanel>
    </div>
  </section>
);
