"use client";

import { Clouds } from "@/components/Clouds/Clouds";
import type { Dictionary } from "@/i18n/dictionaries";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { useEffect, useRef, useState } from "react";

type MobileNavProps = {
  /** Enlaces ya traducidos, los mismos que usa el menú de escritorio. */
  items: { name: string; href: string }[];
  /** Prefijo para las anclas fuera de la home. Ver `Header`. */
  base: string;
  t: Dictionary["nav"];
};

/**
 * Menú móvil a pantalla completa.
 *
 * Antes era un desplegable anclado al botón con `absolute right-0`, pero el
 * header está centrado: el panel abierto quedaba corrido a la izquierda
 * mientras los controles seguían en el medio, y sin fondo propio se
 * transparentaba el contenido de la página. A pantalla completa no hay nada a
 * lo que alinearse, así que ese problema desaparece de raíz.
 *
 * Usa el mismo `<dialog>` nativo que el resto del sitio: trae cierre con
 * Escape, foco atrapado y bloqueo del scroll de fondo sin una sola línea de JS.
 */
export const MobileNav = ({ items, base, t }: MobileNavProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  // Remonta la lista en cada apertura para que la animación escalonada vuelva
  // a correr; si no, solo se vería la primera vez.
  const [aperturas, setAperturas] = useState(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    // Escape cierra por su cuenta, sin avisarle a React: hay que escuchar el
    // evento nativo o `aria-expanded` queda mintiendo.
    const onClose = () => setOpen(false);
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const abrir = () => {
    setAperturas((n) => n + 1);
    setOpen(true);
    dialogRef.current?.showModal();
  };

  const cerrar = () => dialogRef.current?.close();

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={abrir}
        aria-label={t.abrirMenu}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="bg-glass glass flex size-14 cursor-pointer items-center justify-center rounded-lg text-main-text"
      >
        <MenuIcon className="size-6" />
      </button>

      {/* Los `max-*-none` y el `m-0` desarman los topes que el navegador le
          pone a todo <dialog>; sin ellos no llega a ocupar la pantalla.
          `h-dvh` y no `h-screen`: en móvil la barra de direcciones se esconde
          al desplazar y `100vh` deja un salto al pie. */}
      <dialog
        ref={dialogRef}
        aria-label={t.menu}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-transparent"
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden bg-[url('/img/light/small-bg.png')] bg-cover bg-center dark:bg-[url('/img/dark/small-bg.png')]">
          <Clouds />

          {/* Velo tenue sobre el cielo: las nubes siguen ahí pero dejan de
              competir con los enlaces. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-white/25 dark:bg-[#171341]/40"
          />

          {/* A la altura del header, para que el cierre caiga donde el pulgar
              ya estaba al abrirlo. */}
          <div className="relative z-10 flex justify-end px-4 pt-19">
            <button
              type="button"
              onClick={cerrar}
              aria-label={t.cerrarMenu}
              className="bg-glass glass flex size-14 cursor-pointer items-center justify-center rounded-lg text-main-text"
            >
              <CloseIcon className="size-6" />
            </button>
          </div>

          <nav
            key={aperturas}
            className="relative z-10 flex flex-1 flex-col items-center justify-center gap-4 pb-24"
          >
            {items.map((item, i) => (
              <a
                key={item.name}
                href={`${base}${item.href}`}
                onClick={cerrar}
                style={{ animationDelay: `${i * 0.07}s` }}
                className="animate-menu-in font-comic text-5xl text-main-text capitalize transition-transform duration-200 active:scale-95 motion-reduce:animate-none"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </dialog>
    </div>
  );
};
