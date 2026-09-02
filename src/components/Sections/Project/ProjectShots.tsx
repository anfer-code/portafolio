import type { Dictionary } from "@/i18n/dictionaries";
import type { ProjectShot } from "@/data/types";
import { ShotLightbox } from "./childs/ShotLightbox";

type ProjectShotsProps = {
  t: Dictionary["proyecto"];
  shots: ProjectShot[];
};

/**
 * Par de capturas del proyecto, lado a lado en escritorio.
 * Va sin título de sección a propósito: se apoya en el ritmo de la página en
 * vez de anunciarse como una galería aparte.
 *
 * El panel manda la proporción, no la captura: así los dos quedan alineados
 * aunque las imágenes vengan de tamaños distintos. La captura va con
 * `object-contain`, montada sobre el vidrio en vez de taparlo — con `cover`
 * se le recortaba un 21% arriba y abajo a las capturas panorámicas.
 */
export const ProjectShots = ({ t, shots }: ProjectShotsProps) => (
  <section
    aria-label={t.capturas}
    className="w-full px-6 py-10 sm:py-14"
  >
    <div className="mx-auto grid max-w-300 gap-6 md:grid-cols-2">
      {shots.map((shot) => (
        <figure key={shot.caption}>
          {shot.src ? (
            <ShotLightbox
              {...shot}
              src={shot.src}
              ampliar={t.ampliar}
              ampliarLabel={`${t.ampliar}: ${shot.caption}`}
              cerrar={t.cerrar}
            />
          ) : (
            // Hueco a la espera de la captura real: se marca en vez de dejar
            // un espacio en blanco que parezca un error de carga.
            <div className="glass relative aspect-16/10 w-full rounded-2xl bg-glass">
              <div className="absolute inset-3 flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-main-text/25 p-6 text-center">
                <span className="font-press-start text-[10px] tracking-wider text-main-text/50 uppercase">
                  {t.imagenPendiente}
                </span>
                <span className="text-sm text-secondary-text">{shot.alt}</span>
              </div>
            </div>
          )}

          <figcaption className="mt-3 text-sm text-secondary-text">
            {shot.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);
