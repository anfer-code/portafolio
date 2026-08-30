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
        className="animate-note-sway flex aspect-square w-full max-w-[170px] cursor-pointer items-center justify-center bg-[url('/img/poststick.png')] bg-contain bg-center bg-no-repeat p-8 pt-12 transition-transform duration-300 hover:scale-105 hover:[animation-play-state:paused] focus-visible:[animation-play-state:paused]"
      >
        <span className="text-center text-sm font-medium text-[#3A2410]">
          {title}
        </span>
      </button>

      {/* <dialog> nativo: trae backdrop, cierre con Escape y foco atrapado */}
      <dialog
        ref={dialogRef}
        className="m-auto bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        {/* El papel ocupa ~64% del PNG (el resto es transparencia y la
            esquina doblada), por eso el padding va en % y no en px: así el
            texto queda dentro del papel sea cual sea el tamaño del modal. */}
        <div className="flex size-[min(90vw,560px)] flex-col items-center justify-center gap-2 bg-[url('/img/poststick.png')] sm:gap-3 bg-contain bg-center bg-no-repeat px-[21%] pt-[23%] pb-[20%] sm:pt-[33%] text-center">
          <h3 className="text-lg font-bold text-[#3A2410] sm:text-2xl">{title}</h3>
          <p className="text-sm text-[#3A2410] sm:text-base">{body}</p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="mt-2 rounded-md bg-[#3A2410] px-4 py-2 text-sm text-[#F5CE8B]"
          >
            Cerrar
          </button>
        </div>
      </dialog>
    </>
  );
};
