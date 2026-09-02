import { DEFAULT_LOCALE, LOCALES } from "@/i18n/config";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Resuelve el idioma a partir de la URL.
 *
 * En el árbol de `app/` los dos idiomas son el mismo segmento `[lang]`, pero
 * hacia afuera el español no lleva prefijo: `/proyectos/one-rides` tiene que
 * resolver a `/es/proyectos/one-rides` sin que la barra de direcciones cambie.
 * Por eso es un `rewrite` y no un `redirect`.
 *
 * Ojo con el nombre del archivo: en esta versión de Next la convención pasó de
 * `middleware` a `proxy`. Un `middleware.ts` acá no se ejecutaría.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si alguien entra por `/es/...` se lo manda a la URL canónica, sin prefijo.
  // Sin esto Google indexaría la misma página dos veces.
  const conPrefijoPorDefecto =
    pathname === `/${DEFAULT_LOCALE}` ||
    pathname.startsWith(`/${DEFAULT_LOCALE}/`);

  if (conPrefijoPorDefecto) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return NextResponse.redirect(url);
  }

  // `/en` y `/en/...` ya traen su idioma: no hay nada que hacer.
  const yaTieneIdioma = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (yaTieneIdioma) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Se saltea todo lo que no es una página: los archivos internos de Next, las
  // imágenes optimizadas y cualquier cosa con extensión dentro de `public/`.
  matcher: ["/((?!_next|api|.*\\.[\\w]+$).*)"],
};
