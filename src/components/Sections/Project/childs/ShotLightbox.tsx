"use client";

import type { ProjectShot } from "@/data/types";
import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Recibe las etiquetas ya resueltas y no el diccionario entero: este componente
 * es de cliente, y por esa frontera solo cruzan datos serializables. El
 * diccionario trae funciones, y pasarlo entero rompe el build.
 */
type ShotLightboxProps = ProjectShot & {
  src: string;
  ampliar: string;
  ampliarLabel: string;
  cerrar: string;
};

/**
 * Captura del proyecto que se amplía al tocarla.
 *
 * Usa el mismo `<dialog>` nativo que las notas del tablero: backdrop, cierre
 * con Escape y foco atrapado sin librerías. El `p-0` es obligatorio — el
 * navegador le mete `padding: 1em` a todo <dialog> y el preflight de Tailwind
 * no lo resetea.
 */
export const ShotLightbox = ({
  src,
  full,
  alt,
  caption,
  ampliar,
  ampliarLabel,
  cerrar,
}: ShotLightboxProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Las capturas de móvil se publican compuestas sobre un fondo 16:10 para que
  // llenen el bloque; ampliadas se ve mejor el original.
  const ampliada = full ?? src;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClick = (e: MouseEvent) => {
      if (e.target === dialog) dialog.close();
    };
    dialog.addEventListener("click", onClick);
    return () => dialog.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={ampliarLabel}
        className="glass group relative block aspect-16/10 w-full cursor-zoom-in rounded-2xl bg-glass focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-text"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          // El recuadro va acá y no en el panel: `fill` se posiciona con
          // `inset: 0`, que se alinea al borde EXTERIOR del padding del
          // contenedor. Un `p-4` en el panel no la achicaría; en la propia
          // imagen sí, porque `object-fit` trabaja sobre su content box.
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02] sm:p-4"
        />

        {/* Pista de que se puede ampliar. Aparece al pasar el mouse y, en
            táctil —donde no hay hover—, queda visible siempre. */}
        <span
          aria-hidden="true"
          className="absolute right-3 bottom-3 rounded-md bg-[#1D1E30]/75 px-2 py-1 font-press-start text-[8px] tracking-wider text-white/90 uppercase opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100"
        >
          {ampliar}
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={caption}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <div className="flex flex-col items-center gap-3">
          {/* Caja de tamaño fijo con `fill` + `object-contain`, en vez de dejar
              que la imagen se dimensione sola: sin declarar su alto y ancho
              reales —que varían por captura— el navegador resolvía un tamaño
              circular y la dejaba diminuta. Así ocupa todo lo que entra, sea
              vertical u horizontal. */}
          <div className="relative h-[78vh] w-[94vw]">
            <Image
              src={ampliada}
              alt={alt}
              fill
              sizes="94vw"
              className="object-contain"
            />
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-white/80">{caption}</p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="shrink-0 cursor-pointer rounded-md bg-white/15 px-3 py-1.5 text-sm text-white transition hover:bg-white/25"
            >
              {cerrar}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
