/**
 * Idiomas del sitio.
 *
 * El español no lleva prefijo en la URL y el inglés vive bajo `/en`. Esa
 * asimetría es a propósito: las URLs que ya están publicadas y compartidas no
 * cambian, y el idioma nuevo se agrega al costado en vez de mover todo.
 *
 * Por dentro las rutas sí son simétricas: `proxy.ts` reescribe cualquier
 * camino sin prefijo hacia `/es`, así que en el árbol de `app/` los dos
 * idiomas son el mismo `[lang]`.
 */

export const LOCALES = ["es", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

/** Nombre del idioma en su propio idioma, para el botón que lo cambia. */
export const LOCALE_NAMES: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

/** Etiqueta corta del botón: se muestra el idioma al que se puede cambiar. */
export const LOCALE_SHORT: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};

/**
 * Prefijo de URL de cada idioma. El del idioma por defecto es vacío, de ahí
 * que haya que construir las rutas con esta función y no concatenando a mano.
 */
export const localePrefix = (locale: Locale) =>
  locale === DEFAULT_LOCALE ? "" : `/${locale}`;

/** Ruta absoluta de un camino interno en un idioma dado. */
export const localePath = (locale: Locale, path = "/") => {
  const prefix = localePrefix(locale);
  if (path === "/") return prefix || "/";
  return `${prefix}${path}`;
};
