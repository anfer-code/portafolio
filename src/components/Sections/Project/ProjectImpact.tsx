import type { ProjectHeadline, ProjectMetric } from "@/data/projects";
import Image from "next/image";

type ProjectImpactProps = {
  headline: ProjectHeadline;
  metrics: ProjectMetric[];
};

export const ProjectImpact = ({ headline, metrics }: ProjectImpactProps) => (
  <section id="impacto" className="w-full px-6 pt-20 pb-10 sm:pt-24">
    <div className="mx-auto max-w-300">
      <h2 className="font-comic text-4xl text-main-text sm:text-5xl">Impacto</h2>
      <p className="mt-3 max-w-2xl text-lg text-secondary-text">
        El marcador que dejó el proyecto.
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,20rem)_1fr]">
        {/* Panel del trofeo: el dato estrella, en grande */}
        <div className="glass flex flex-col items-center justify-center gap-5 rounded-xl bg-glass px-6 py-10 text-center">
          <Image
            src="/img/trophy.png"
            alt=""
            width={265}
            height={265}
            className="pixelated size-16"
          />

          <p className="font-press-start text-[10px] leading-relaxed tracking-wider text-secondary-text uppercase">
            Resultados del proyecto
          </p>

          {/* La sombra dura (sin desenfoque) es la del texto en los juegos de
              la época; mantiene el número legible sobre cualquier fondo. */}
          <p className="font-press-start text-3xl leading-tight break-words text-main-text uppercase [text-shadow:3px_3px_0_rgba(0,0,0,0.35)] sm:text-4xl">
            {headline.value}
            <span className="mt-3 block text-xl sm:text-2xl">
              {headline.label}
            </span>
          </p>
        </div>

        {/* Filas del marcador */}
        <ul className="flex flex-col gap-4">
          {metrics.map(({ label, score }, i) => (
            <li
              key={label}
              // `flex-wrap` mas `min-w-0` en las dos mitades: si algun score se
              // pasa del formato corto de marcador, baja de linea en vez de
              // estirar la fila y sacarle scroll horizontal a toda la pagina.
              className="glass flex flex-1 flex-wrap items-center justify-between gap-x-5 gap-y-3 rounded-xl bg-glass px-6 py-5"
            >
              <span className="min-w-0 font-press-start text-[10px] leading-relaxed tracking-wider text-main-text uppercase">
                {label}
              </span>

              <span className="flex min-w-0 items-center gap-3">
                {/* Las monedas se desfasan para que no giren todas a la vez */}
                <span
                  aria-hidden="true"
                  className="coin shrink-0"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
                <span className="font-press-start text-sm break-words text-main-text">
                  {score}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
