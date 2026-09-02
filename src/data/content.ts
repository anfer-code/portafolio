import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { experience as experienceEn } from "./en/experience";
import { notes as notesEn } from "./en/notes";
import { projects as projectsEn } from "./en/projects";
import { stats as statsEn } from "./en/stats";
import { experience as experienceEs } from "./es/experience";
import { notes as notesEs } from "./es/notes";
import { projects as projectsEs } from "./es/projects";
import { stats as statsEs } from "./es/stats";

/**
 * Contenido del sitio por idioma.
 *
 * Cada idioma tiene sus propios archivos en `data/es` y `data/en`, con los
 * tipos compartidos en `data/types.ts`. Se eligió duplicar el contenido en vez
 * de meter los dos idiomas en la misma estructura porque son textos que se
 * editan mucho y por separado: así tocar el español nunca puede romper el
 * inglés, ni al revés.
 *
 * Lo que no es texto —slugs, imágenes, colores, stack y los `score` del
 * marcador— sí está duplicado, y ahí hay riesgo de que se desincronice. Con dos
 * proyectos es manejable; si algún día son diez, conviene separar los campos
 * neutros del contenido traducible.
 */
const CONTENIDO = {
  es: {
    projects: projectsEs,
    notes: notesEs,
    experience: experienceEs,
    stats: statsEs,
  },
  en: {
    projects: projectsEn,
    notes: notesEn,
    experience: experienceEn,
    stats: statsEn,
  },
} satisfies Record<Locale, unknown>;

export const getContent = (locale: Locale) =>
  CONTENIDO[locale] ?? CONTENIDO[DEFAULT_LOCALE];

/** Un proyecto por su slug. El slug es el mismo en los dos idiomas. */
export const getProject = (locale: Locale, slug: string) =>
  getContent(locale).projects.find((project) => project.slug === slug);

/**
 * Los slugs publicados, para `generateStaticParams`. Se leen del español
 * porque es la fuente de verdad: si un proyecto existe, existe ahí primero.
 */
export const projectSlugs = projectsEs.map((project) => project.slug);
