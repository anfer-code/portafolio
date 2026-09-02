/**
 * Formas del contenido, compartidas por los dos idiomas.
 *
 * Los datos viven en `data/es` y `data/en`; los tipos viven acá una sola vez.
 * Así el inglés no puede quedarse con una estructura distinta del español sin
 * que TypeScript lo note.
 */

/* ── Proyectos ──────────────────────────────────────────────────────────── */

/**
 * Fila del marcador de "Impacto".
 *
 * Ojo con los acentos: estas etiquetas se pintan en mayúsculas con Press Start
 * 2P, que no trae las vocales acentuadas en caja alta y las sustituye por la
 * fuente del sistema (se ve "OPTIMICé" en medio de la línea). Por eso el texto
 * se redacta sin acentos ni eñes.
 */
export type ProjectMetric = {
  /** El logro completo, tal como se lee en la fila. */
  label: string;
  /** Valor corto, estilo marcador: "0025", "+5M", "100%". */
  score: string;
};

/** Dato estrella del proyecto: va grande, junto al trofeo. */
export type ProjectHeadline = {
  value: string;
  /** Misma restricción de acentos que `ProjectMetric["label"]`. */
  label: string;
};

export type ContributionGroup = {
  title: string;
  items: string[];
};

/**
 * Captura del proyecto. Van de a pares, en dos columnas, sin título de
 * sección: se leen como parte de la página y no como una galería aparte.
 * Sin `src` se pinta un placeholder que anuncia lo que va ahí.
 */
export type ProjectShot = {
  src?: string;
  /**
   * Versión a mostrar al ampliar, si conviene que sea otra. Las capturas de
   * móvil se publican compuestas sobre un fondo 16:10 para que llenen el
   * bloque; ampliadas, en cambio, se ve mejor el original vertical.
   * Sin esto se amplía `src`.
   */
  full?: string;
  alt: string;
  caption: string;
};

export type Learning = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Una línea que resume el proyecto. Se usa en el hero y en el <meta>. */
  tagline: string;

  /* Card de la home */
  imageLight: string;
  imageDark: string;
  glow: string;

  /* Ficha */
  kind: string;
  role: string;
  period: string;
  duration: string;
  team: string;
  /** Solo si el proyecto es público; sin esto no se pinta el botón. */
  live?: { label: string; href: string };

  /* Detalle */
  summary: string;
  /** Puede traer varios párrafos, separados por saltos de línea. */
  challenge: string;
  contributions: ContributionGroup[];
  headline: ProjectHeadline;
  metrics: ProjectMetric[];
  /** Los nombres que existen en `data/stack.ts` se pintan con su ícono. */
  stack: string[];
  shots: ProjectShot[];
  learnings: Learning[];
};

/* ── Notas del tablero ──────────────────────────────────────────────────── */

export type Note = {
  title: string;
  /** Contenido que se muestra al abrir la nota. */
  body?: string;
};

/* ── Experiencia ────────────────────────────────────────────────────────── */

export type Job = {
  role: string;
  company: string;
  period: string;
  description?: string;
  responsibilities: string[];
};

/* ── Ficha de personaje ─────────────────────────────────────────────────── */

export type StatAnimation = "flip" | "flipDiagonal" | "turn";

export type Stat = {
  icon: string;
  label: string;
  value: string;
  animation: StatAnimation;
};
