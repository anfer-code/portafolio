import { notes } from "@/data/notes";
import { stack } from "@/data/stack";
import { Note } from "./childs/Note";
import { TechIcon } from "./childs/TechIcon";

// La lista va duplicada: el carrusel se desplaza justo el alto de una copia,
// así al reiniciarse el bucle es imperceptible.
const loop = [...stack, ...stack];

export const Stack = () => (
  <section
    id="stack"
    className="w-full py-14 sm:py-25"
  >
    <div className="mx-auto max-w-300 px-6">
      <h2 className="mb-6 text-2xl font-bold text-main-text">Stack</h2>

      <div className="flex flex-col gap-6 md:flex-row">
        {/* Carril del carrusel: recorta el desborde y el contenido se mueve solo */}
        <div className="glass relative shrink-0 overflow-hidden rounded-lg bg-glass p-4 md:w-[76px] md:p-0">
          {/* En escritorio va absolute para no aportar altura: así el carril
              se estira al alto del panel de notas en vez de imponer la suya. */}
          <ul className="animate-marquee-x md:animate-marquee-y flex w-max flex-row items-center gap-5 md:absolute md:inset-x-0 md:top-0 md:w-auto md:flex-col md:py-4">
            {loop.map((tech, i) => (
              <li key={`${tech.name}-${i}`} aria-hidden={i >= stack.length}>
                <TechIcon {...tech} />
              </li>
            ))}
          </ul>
        </div>

        {/* Tablero de notas */}
        <div className="flex flex-1 flex-col gap-4">
          <div className="glass rounded-lg bg-glass px-6 py-4">
            <h3 className="font-comic text-2xl text-main-text">Notas</h3>
          </div>

          {/* Padding y gap chicos en móvil: en 375px el panel se comía 88 de los
              327 disponibles y las notas quedaban de 119px, sin lugar para una
              palabra como "performance". */}
          <div className="glass grid flex-1 grid-cols-2 justify-items-center gap-4 rounded-lg bg-glass p-4 sm:grid-cols-3 sm:gap-6 sm:p-8">
            {notes.map((note, i) => (
              <Note key={note.title} {...note} delay={`${i * 0.45}s`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
