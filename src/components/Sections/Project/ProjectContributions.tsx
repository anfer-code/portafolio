import { CheckIcon } from "@/components/icons/CheckIcon";
import type { ContributionGroup } from "@/data/projects";

type ProjectContributionsProps = {
  contributions: ContributionGroup[];
};

export const ProjectContributions = ({
  contributions,
}: ProjectContributionsProps) => (
  <section id="lo-que-hice" className="w-full px-6 py-14 sm:py-25">
    <div className="mx-auto max-w-300">
      <h2 className="font-comic text-4xl text-main-text sm:text-5xl">
        Lo que hice
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-secondary-text">
        Mi aporte concreto al proyecto, agrupado por frente de trabajo.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {contributions.map(({ title, items }) => (
          <article key={title} className="glass rounded-xl bg-glass p-6">
            <h3 className="font-bold text-main-text">{title}</h3>

            <ul className="mt-4 flex flex-col gap-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon
                    className="mt-0.5 size-4 shrink-0 text-[#FFDE46] dark:text-[#9B51E0]"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-main-text">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);
