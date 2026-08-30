import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { ThemeImage } from "@/components/ThemeImage/ThemeImage";
import type { Project } from "@/data/projects";
import Link from "next/link";

type CardProps = Pick<
  Project,
  "slug" | "title" | "imageLight" | "imageDark" | "glow"
>;

export const Card = ({
  slug,
  title,
  imageLight,
  imageDark,
  glow,
}: CardProps) => (
  <Link
    href={`/proyectos/${slug}`}
    className="group glass relative flex flex-col overflow-hidden rounded-2xl bg-[#68686833] transition-[transform,filter] duration-300 hover:-translate-y-1"
  >
    <h3 className="px-6 pt-6 text-xl font-bold text-main-text">{title}</h3>

    <div className="mt-4 border-t border-border" />

    <div className="px-6 pt-10 pb-6">
      <div className="relative">
        <div
          className="absolute inset-x-8 -top-6 bottom-1/2 rounded-2xl opacity-30 transition-transform duration-300 ease-out group-hover:-translate-y-4"
          style={{ background: glow }}
        />
        <div
          className="absolute inset-x-4 -top-3 bottom-1/2 rounded-2xl opacity-50 transition-transform duration-300 ease-out group-hover:-translate-y-2"
          style={{ background: glow }}
        />

        <div className="notch-br relative overflow-hidden rounded-2xl">
          <ThemeImage
            lightSrc={imageLight}
            darkSrc={imageDark}
            width={386}
            height={284}
            alt={`Vista previa del proyecto ${title}`}
            className="h-auto w-full"
          />
        </div>

        {/* Botón circular anidado en el notch */}
        <span className="absolute -right-3 -bottom-3 flex size-[105px] items-center justify-center rounded-full bg-white text-[#2A2A2A] transition-transform duration-300 group-hover:scale-105 dark:bg-accent dark:text-white">
          <ArrowIcon className="size-14.5" aria-hidden="true" />
        </span>
      </div>
    </div>
  </Link>
);
