"use client";

import type { Note as NoteType } from "@/data/types";
import { useCallback, useEffect, useRef, useState } from "react";

type NoteProps = NoteType & {
  /** Desfase para que las notas no se balanceen todas al mismo tiempo. */
  delay?: string;
};

/** Amarillo del papel, medido del PNG. Los degradados tienen que arrancar de él
 *  para que el texto parezca desvanecerse contra la nota y no contra un gris. */
const PAPEL = "#F9E99B";
const fundido = (hacia: "top" | "bottom") =>
  `linear-gradient(to ${hacia}, ${PAPEL} 30%, rgba(249, 233, 155, 0))`;

export const Note = ({ title, body, delay = "0s" }: NoteProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [hayArriba, setHayArriba] = useState(false);
  const [hayAbajo, setHayAbajo] = useState(false);

  // De cuánto texto sobra depende todo el indicador: si no sobra nada, no se
  // pinta nada y la nota se ve limpia.
  const revisar = useCallback(() => {
    const el = bodyRef.current;
    if (!el) return;
    setHayArriba(el.scrollTop > 4);
    setHayAbajo(el.scrollHeight - el.clientHeight - el.scrollTop > 4);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Cierra si el clic cae en el backdrop (fuera del contenido de la nota).
    const onClick = (e: MouseEvent) => {
      if (e.target === dialog) dialog.close();
    };

    dialog.addEventListener("click", onClick);

    // Un ResizeObserver en vez de escuchar `resize`: también se dispara cuando
    // el modal se abre (cerrado mide cero) y cuando termina de cargar la fuente
    // y el texto cambia de alto. Los dos casos dejaban el indicador desfasado.
    const observer = new ResizeObserver(revisar);
    if (bodyRef.current) observer.observe(bodyRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      dialog.removeEventListener("click", onClick);
      observer.disconnect();
    };
  }, [revisar]);

  const abrir = () => {
    dialogRef.current?.showModal();
    // Un <dialog> cerrado está en `display: none` y mide cero: hay que
    // preguntarle recién después de abrirlo.
    requestAnimationFrame(revisar);
  };

  return (
    <>
      {/* El envoltorio no es decorativo: fija el ancho de referencia del botón.

          El padding en % se resuelve contra el ancho del CONTENEDOR, no del
          propio elemento. Sin este div, los % del botón se calculaban contra la
          columna de la grilla (316px en escritorio) en vez de contra la nota
          (170px): el `pt-[43%]` daba 136px, el botón crecía a 171x255 y el papel
          —que es cuadrado y va en `bg-contain`— quedaba chico y centrado, con el
          texto cayendo por fuera. */}
      <div className="w-full max-w-42.5">
      <button
        type="button"
        onClick={abrir}
        style={{ animationDelay: delay }}
        className="animate-note-sway flex aspect-square w-full cursor-pointer items-center justify-center bg-[url('/img/poststick.png')] bg-contain bg-center bg-no-repeat px-[23%] pt-[43%] pb-[21%] transition-transform duration-300 hover:scale-105 hover:[animation-play-state:paused] focus-visible:[animation-play-state:paused]"
      >
        {/* `px-[23%]` calca el ancho del papel (20.9%-78.7% del PNG): con menos,
            la caja de texto sobresale del dibujo.

            Sin `break-words` ni `overflow-wrap`: cualquiera de los dos, junto al
            `text-balance`, le da permiso al balanceador para partir palabras, y
            termina apilando "Esc / alar / de / ver / dad". El ancho correcto de
            la caja alcanza para que no haga falta. */}
        <span className="text-center text-xs/tight font-medium text-balance text-[#3A2410] sm:text-sm/tight">
          {title}
        </span>
      </button>
      </div>

      {/* Dos cosas del <dialog> nativo que hay que desarmar a mano:

          `p-0` — el navegador le da `padding: 1em` y el preflight de Tailwind no
          lo toca. Esos 32px se sumaban por fuera del ancho del papel.

          El tamaño va acá y no en el div de adentro. El navegador le impone al
          <dialog> un `max-width: calc(100% - 6px)`, y `95vw` puede superarlo
          (vw cuenta la barra de scroll, `100%` no). Con la medida en el div, el
          diálogo quedaba más angosto que su contenido y —como el UA le pone
          `overflow: auto`— sacaba su propia barra horizontal. Midiendo el
          diálogo y dejando el div en `size-full`, el contenido sigue al tope y
          nunca lo desborda.

          `max-w-none max-h-none` anulan ese tope del navegador. Sin eso el
          diálogo salía rectangular (337x356) en vez de cuadrado, y los padding
          en % —que están calibrados contra el papel, que es cuadrado— dejaban
          de caer donde corresponde. */}
      <dialog
        ref={dialogRef}
        className="m-auto size-[min(95vw,85vh,680px)] max-h-none max-w-none overflow-hidden bg-transparent p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        <div className="flex size-full flex-col items-center justify-center gap-1.5 bg-[url('/img/poststick.png')] sm:gap-3 bg-contain bg-center bg-no-repeat px-[22%] pt-[43%] pb-[22%] text-center">
          <h3 className="shrink-0 text-base font-bold text-[#3A2410] sm:text-xl">
            {title}
          </h3>

          {/* El área de lectura.

              `overflow-x-hidden` es obligatorio, no decorativo: al declarar solo
              `overflow-y: auto`, el eje X pasa de `visible` a `auto` por regla
              del CSS, y cualquier palabra que no entre saca una barra de scroll
              horizontal adentro de la nota.

              `overscroll-contain` evita que al llegar al final el gesto siga de
              largo y arrastre la página de atrás. */}
          <div
            ref={bodyRef}
            onScroll={revisar}
            className="min-h-0 w-full overflow-x-hidden overflow-y-auto overscroll-contain [scrollbar-color:#3A241059_transparent] scrollbar-thin"
          >
            {/* Los fundidos van `sticky` dentro del scroll: así quedan clavados
                al borde visible sin necesidad de medir nada. El margen negativo
                los superpone al texto en vez de ocupar su propia línea. */}
            <div
              aria-hidden="true"
              className="pointer-events-none sticky top-0 z-10 -mb-4 h-4 transition-opacity duration-200"
              style={{ backgroundImage: fundido("bottom"), opacity: hayArriba ? 1 : 0 }}
            />

            <p
              ref={textRef}
              className="px-0.5 text-[12.5px] leading-[1.45] text-[#3A2410] sm:text-[15px] sm:leading-normal">
              {body}
            </p>

            <div
              aria-hidden="true"
              className="pointer-events-none sticky bottom-0 z-10 -mt-6 h-6 transition-opacity duration-200"
              style={{ backgroundImage: fundido("top"), opacity: hayAbajo ? 1 : 0 }}
            />
          </div>

          {/* Aviso para lectores de pantalla: el degradado no les dice nada. */}
          <p className="sr-only" aria-live="polite">
            {hayAbajo ? "Queda texto por leer más abajo." : ""}
          </p>

          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            // Compacto en móvil: cada píxel que no gasta el botón es una línea
            // más de texto visible dentro del papel.
            className="mt-1 shrink-0 rounded-md bg-[#3A2410] px-4 py-1.5 text-xs text-[#F5CE8B] sm:mt-2 sm:py-2 sm:text-sm"
          >
            Cerrar
          </button>
        </div>
      </dialog>
    </>
  );
};
