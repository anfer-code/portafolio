import { CheckIcon } from "@/components/icons/CheckIcon";
import type { Job } from "@/data/experience";

export const ExperienceCard = ({
  role,
  company,
  period,
  description,
  responsibilities,
}: Job) => (
  <article className="glass rounded-xl bg-glass p-6">
    <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
      <h3 className="font-bold text-main-text">{role}</h3>
      <span className="shrink-0 text-sm text-main-text">{period}</span>
    </header>

    <p className="mt-1 text-sm font-medium text-[#FFDE46] dark:text-[#E5D1FF]">
      {company}
    </p>

    {description && (
      <p className="mt-4 text-sm text-main-text">{description}</p>
    )}

    <h4 className="mt-4 text-sm font-medium text-main-text">
      Responsabilidades
    </h4>

    <ul className="mt-3 flex flex-col gap-3">
      {responsibilities.map((item) => (
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
);
