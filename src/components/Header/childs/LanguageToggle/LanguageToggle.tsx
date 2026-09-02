"use client";

import {
  DEFAULT_LOCALE,
  localePath,
  LOCALE_SHORT,
  type Locale,
} from "@/i18n/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LanguageToggleProps = {
  locale: Locale;
  /** Etiqueta accesible, ya traducida al idioma en curso. */
  label: string;
};

/**
 * Cambia el idioma conservando la página donde estás.
 *
 * Es un `<Link>` y no un botón con estado: cada idioma tiene su propia URL, así
 * que cambiar de idioma es navegar. Eso lo vuelve compartible, indexable y hace
 * que el botón funcione con clic derecho, abrir en pestaña nueva y demás.
 *
 * Muestra la sigla del idioma *al que se va*, no del actual: un botón ofrece
 * un destino, no describe dónde estás.
 */
export const LanguageToggle = ({ locale, label }: LanguageToggleProps) => {
  const pathname = usePathname() ?? "/";
  const otro: Locale = locale === "es" ? "en" : "es";

  // `usePathname` devuelve la ruta ya reescrita por el proxy, con el prefijo
  // del idioma incluido. Se le quita para quedarse con el camino puro y
  // volver a armarlo en el otro idioma.
  const sinPrefijo =
    pathname.replace(new RegExp(`^/(${DEFAULT_LOCALE}|en)(?=/|$)`), "") || "/";

  return (
    <Link
      href={localePath(otro, sinPrefijo)}
      hrefLang={otro}
      aria-label={label}
      className="flex h-14 cursor-pointer items-center px-4 font-press-start text-[11px] tracking-wider text-main-text transition-opacity hover:opacity-60"
    >
      {LOCALE_SHORT[otro]}
    </Link>
  );
};
