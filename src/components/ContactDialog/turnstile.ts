/**
 * Carga del widget de Cloudflare Turnstile.
 *
 * Va en renderizado explícito (`?render=explicit`) y no en el automático, porque
 * el formulario se monta y desmonta cada vez que se abre el modal: el modo
 * automático solo busca widgets una vez, al cargar el script, y no vería
 * ninguno de los que aparecen después.
 *
 * La clave de sitio es pública por diseño — viaja en el HTML y no protege nada
 * por sí sola. Lo que protege es la verificación del token en el servidor.
 */

type RenderOptions = {
  sitekey: string;
  theme?: "auto" | "light" | "dark";
  size?: "normal" | "compact" | "flexible";
  language?: string;
};

type TurnstileApi = {
  render: (el: HTMLElement, options: RenderOptions) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

const SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

// Una sola promesa para toda la página: hay dos botones de contacto, y cada uno
// monta su propio formulario. El script se pide una vez y los dos la comparten.
let pending: Promise<TurnstileApi> | null = null;

export const loadTurnstile = (): Promise<TurnstileApi> => {
  if (pending) return pending;

  pending = new Promise((resolve, reject) => {
    if (window.turnstile) return resolve(window.turnstile);

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SRC}"]`,
    );
    const script = existing ?? document.createElement("script");

    const onLoad = () => {
      if (window.turnstile) resolve(window.turnstile);
      else reject(new Error("Turnstile cargó sin exponer su API"));
    };

    script.addEventListener("load", onLoad, { once: true });
    script.addEventListener(
      "error",
      () => reject(new Error("no se pudo cargar Turnstile")),
      { once: true },
    );

    if (!existing) {
      script.src = SRC;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  });

  // Si falla, que el próximo intento vuelva a probar en vez de quedar pegado
  // a una promesa rechazada para siempre.
  pending.catch(() => {
    pending = null;
  });

  return pending;
};
