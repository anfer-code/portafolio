import type { Dictionary } from "@/i18n/dictionaries";
import { Button } from "@/components/Buttons/Button";
import { Clouds } from "@/components/Clouds/Clouds";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { ThemeImage } from "@/components/ThemeImage/ThemeImage";
import type { Project } from "@/data/types";
import Link from "next/link";

type ProjectHeroProps = { t: Dictionary["proyecto"]; volverHref: string } & Pick<
  Project,
  "title" | "tagline" | "kind" | "role" | "duration" | "live" | "imageLight" | "imageDark" | "glow"
>;

export const ProjectHero = ({
  t,
  volverHref,
  title,
  tagline,
  kind,
  role,
  duration,
  live,
  imageLight,
  imageDark,
  glow,
}: ProjectHeroProps) => (
  // Mismo fondo que la sección Proyectos de la home: se entra al detalle y el
  // escenario no cambia, solo se acerca.
  <section className="relative overflow-hidden bg-[url('/img/light/small-bg.png')] bg-cover bg-center pt-40 pb-20 sm:pt-48 sm:pb-24 dark:bg-[url('/img/dark/small-bg.png')]">
    <Clouds />

    <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
      <div>
        <Link
          href={volverHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-secondary-text transition-opacity hover:opacity-60"
        >
          {/* La flecha del sitio apunta arriba-derecha: rotarla la vuelve un
              "volver" sin necesidad de un segundo ícono. */}
          <ArrowIcon className="size-4 rotate-[225deg]" aria-hidden="true" />
          {t.volver}
        </Link>

        <p className="mt-6 font-press-start text-xs tracking-wider text-[#3A2410] uppercase dark:text-[#C9BCEF]">
          {kind}
        </p>

        <h1 className="mt-4 font-comic text-5xl text-main-text sm:text-7xl">
          {title}
        </h1>

        <p className="mt-4 max-w-lg text-lg text-secondary-text sm:text-2xl">
          {tagline}
        </p>

        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <dt className="text-sm text-secondary-text">{t.rol}</dt>
            <dd className="font-bold text-main-text">{role}</dd>
          </div>
          <div>
            <dt className="text-sm text-secondary-text">{t.duracion}</dt>
            <dd className="font-bold text-main-text">{duration}</dd>
          </div>
        </dl>

        {live && (
          <div className="mt-8">
            <Button
              href={live.href}
              external
              iconPosition="end"
              icon={<ArrowIcon className="size-4" aria-hidden="true" />}
            >
              {live.label}
            </Button>
          </div>
        )}
      </div>

      {/* Portada con el mismo tratamiento de resplandor apilado que las cards */}
      <div className="relative">
        <div
          className="absolute inset-x-10 -top-8 bottom-1/2 rounded-2xl opacity-30"
          style={{ background: glow }}
        />
        <div
          className="absolute inset-x-5 -top-4 bottom-1/2 rounded-2xl opacity-50"
          style={{ background: glow }}
        />

        <div className="relative overflow-hidden rounded-2xl">
          <ThemeImage
            lightSrc={imageLight}
            darkSrc={imageDark}
            width={772}
            height={568}
            priority
            sizes="(max-width: 1024px) 100vw, 512px"
            alt={`Vista previa del proyecto ${title}`}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  </section>
);
