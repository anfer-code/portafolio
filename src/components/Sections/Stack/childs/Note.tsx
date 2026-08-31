"use client";

import type { Note as NoteType } from "@/data/notes";
import { useEffect, useRef } from "react";

type NoteProps = NoteType & {
  /** Desfase para que las notas no se balanceen todas al mismo tiempo. */
  delay?: string;
};

export const Note = ({ title, body, delay = "0s" }: NoteProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Cierra si el clic cae en el backdrop (fuera del contenido de la nota).
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
        style={{ animationDelay: delay }}
        className="animate-note-sway flex aspect-square w-full max-w-[170px] cursor-pointer items-center justify-center bg-[url('/img/poststick.png')] bg-contain bg-center bg-no-repeat p-[23%] pt-[27%] transition-transform duration-300 hover:scale-105 hover:[animation-play-state:paused] focus-visible:[animation-play-state:paused]"
      >
        <span className="text-center text-xs font-medium text-balance text-[#3A2410] sm:text-sm">
          {title}
        </span>
      </button>

      {/* <dialog> nativo: trae backdrop, cierre con Escape y foco atrapado */}
      <dialog
        ref={dialogRef}
        className="m-auto bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        {/* El papel del PNG va exactamente del 20.9% al 78.7% en los dos ejes (el
            resto es transparencia, el pin y la esquina doblada). Por eso el
            padding va en %, con unos puntos de aire hacia adentro: así el texto
            cae dentro del papel sea cual sea el tamaño del modal. El % anterior
            coincidía con el borde justo y en pantallas chicas se desbordaba. */}
        <div className="flex size-[min(90vw,560px)] flex-col items-center justify-center gap-2 bg-[url('/img/poststick.png')] sm:gap-3 bg-contain bg-center bg-no-repeat px-[24%] pt-[29%] pb-[24%] text-center sm:pt-[33%]">
          <h3 className="shrink-0 text-base font-bold text-[#3A2410] sm:text-2xl">{title}</h3>
          {/* Si un cuerpo largo no entra en el papel, scrollea acá adentro en vez
              de derramarse por fuera: el título y el botón quedan siempre visibles. */}
          <p className="min-h-0 overflow-y-auto text-[13px] leading-snug text-[#3A2410] sm:text-base sm:leading-normal">
            {body}
          </p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="mt-2 shrink-0 rounded-md bg-[#3A2410] px-4 py-2 text-sm text-[#F5CE8B]"
          >
            Cerrar
          </button>
        </div>
      </dialog>
    </>
  );
};
