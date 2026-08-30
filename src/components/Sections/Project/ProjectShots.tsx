import type { ProjectShot } from "@/data/projects";
import Image from "next/image";

type ProjectShotsProps = {
  shots: ProjectShot[];
};

/**
 * Par de capturas del proyecto, lado a lado en escritorio.
 * Va sin título de sección a propósito: se apoya en el ritmo de la página en
 * vez de anunciarse como una galería aparte.
 */
export const ProjectShots = ({ shots }: ProjectShotsProps) => (
  <section
    aria-label="Capturas del proyecto"
    className="w-full px-6 py-10 sm:py-14"
  >
    <div className="mx-auto grid max-w-300 gap-6 md:grid-cols-2">
      {shots.map(({ src, alt, caption }) => (
        <figure key={caption}>
          <div className="glass relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-glass">
            {src ? (
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            ) : (
              // Hueco a la espera de la captura real: se marca en vez de dejar
              // un espacio en blanco que parezca un error de carga.
              <div className="absolute inset-3 flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-main-text/25 p-6 text-center">
                <span className="font-press-start text-[10px] tracking-wider text-main-text/50 uppercase">
                  Imagen pendiente
                </span>
                <span className="text-sm text-secondary-text">{alt}</span>
              </div>
            )}
          </div>

          <figcaption className="mt-3 text-sm text-secondary-text">
            {caption}
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);
