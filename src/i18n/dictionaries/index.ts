import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { en } from "./en";
import { es } from "./es";

export type Dictionary = typeof es;

const DICCIONARIOS: Record<Locale, Dictionary> = { es, en };

/**
 * Diccionario de un idioma.
 *
 * Es `async` a propósito aunque hoy resuelva de inmediato: mantiene la firma
 * estable por si algún día los diccionarios pasan a cargarse por separado, y
 * deja que los Server Components lo pidan con `await` como cualquier otro dato.
 */
export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  DICCIONARIOS[locale] ?? DICCIONARIOS[DEFAULT_LOCALE];

/** Versión síncrona, para los componentes de cliente que ya reciben el idioma. */
export const getDictionarySync = (locale: Locale): Dictionary =>
  DICCIONARIOS[locale] ?? DICCIONARIOS[DEFAULT_LOCALE];
