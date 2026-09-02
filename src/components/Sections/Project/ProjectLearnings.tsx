import type { Dictionary } from "@/i18n/dictionaries";
import { PixelPanel } from "@/components/PixelPanel/PixelPanel";
import { Note } from "@/components/Sections/Stack/childs/Note";
import type { Learning } from "@/data/types";

type ProjectLearningsProps = {
  t: Dictionary["proyecto"];
  learnings: Learning[];
};

export const ProjectLearnings = ({ t, learnings }: ProjectLearningsProps) => (
  <section id="aprendizajes" className="w-full px-6 py-10 sm:py-14">
    <div className="mx-auto max-w-300">
      <h2 className="font-comic text-4xl text-main-text sm:text-5xl">
        {t.aprendizajes}
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-secondary-text">
        {t.aprendizajesTexto}
      </p>
      <PixelPanel className="mt-10 grid grid-cols-2 justify-items-center gap-4 p-4 sm:gap-6 sm:p-8 lg:grid-cols-4">
        {learnings.map((learning, i) => (
          <Note key={learning.title} {...learning} delay={`${i * 0.45}s`} />
        ))}
      </PixelPanel>
    </div>
  </section>
);
