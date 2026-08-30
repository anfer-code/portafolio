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
  challenge: string;
  contributions: ContributionGroup[];
  headline: ProjectHeadline;
  metrics: ProjectMetric[];
  /** Los nombres que existen en `data/stack.ts` se pintan con su ícono. */
  stack: string[];
  shots: ProjectShot[];
  learnings: Learning[];
};

export const projects: Project[] = [
  {
    slug: "futbol-sites",
    title: "Futbol Sites",
    tagline:
      "Una red de más de 25 sitios de fútbol que sirve millones de visitas al día.",
    imageLight: "/img/light/proyectos.png",
    imageDark: "/img/dark/proyectos.png",
    glow: "#D8122F",

    kind: "Medios digitales",
    role: "Frontend Developer Semi-Senior",
    period: "Jul 2022 — Presente",
    duration: "4 años",
    team: "Equipo de producto distribuido, con front, back, SEO y ads",
    // TODO: agregar la URL pública si se quiere enlazar.
    // live: { label: "Ver sitio", href: "https://..." },

    summary:
      "Futbol Sites es la red de medios deportivos de Better Collective en LATAM: sitios de noticias, resultados, tablas y estadísticas de fútbol que en conjunto mueven millones de visitas diarias. Entré en julio de 2022 y desde entonces construyo y mantengo esa red junto al equipo de producto.",
    challenge:
      "Un mismo core de front-end tiene que servir a decenas de sitios con marcas, idiomas y mercados distintos, sin que lanzar uno nuevo signifique empezar de cero. Encima está la tensión de siempre en medios: cada script de publicidad pelea contra los Core Web Vitals, y ahí el rendimiento no es un lujo, es tráfico, y el tráfico son ingresos.",

    contributions: [
      {
        title: "Arquitectura y nuevos sitios",
        items: [
          "Creación de nuevos sitios adaptando su diseño a la arquitectura existente, en lugar de forkear el proyecto.",
          "Desarrollo de componentes reutilizables que hoy usan varios sitios de la red.",
          "Features cross-team pensados desde el inicio para escalar a toda la red, no a un solo sitio.",
        ],
      },
      {
        title: "Performance y Core Web Vitals",
        items: [
          "Optimización de LCP, CLS e INP en sitios con carga pesada de publicidad y contenido dinámico.",
          "Revisión del costo real de cada script de terceros antes de sumarlo al bundle.",
          "Ajuste de imágenes, fuentes y carga diferida para que el contenido llegue antes que los anuncios.",
        ],
      },
      {
        title: "Monetización",
        items: [
          "Implementación y mantenimiento de AdSense y Optidigital como sistemas de monetización.",
          "Integración de los espacios publicitarios sin romper el layout ni disparar el CLS.",
        ],
      },
      {
        title: "Operación y calidad",
        items: [
          "Gestión de despliegues a producción y mantenimiento continuo de los sitios.",
          "Monitoreo, diagnóstico y resolución de bugs reportados desde producción.",
          "Trazabilidad y documentación técnica de las tareas en JIRA.",
        ],
      },
    ],

    headline: { value: "5M+", label: "usuarios diarios" },
    metrics: [
      { label: "+25 sitios activos en la red", score: "0025" },
      { label: "Cuatro temporadas seguidas en el equipo", score: "0004" },
      // TODO: reemplazar por una métrica de performance medible (ej. "LCP -40%").
      { label: "Sitios con Core Web Vitals en verde", score: "100%" },
      { label: "AdSense y Optidigital integrados", score: "0002" },
    ],

    stack: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Git",
      "AdSense",
      "Optidigital",
      "JIRA",
    ],

    shots: [
      {
        alt: "Home de uno de los sitios de la red",
        caption: "Home de uno de los sitios de la red",
      },
      {
        alt: "Tabla de posiciones y resultados en vivo",
        caption: "Tabla de posiciones y resultados en vivo",
      },
    ],

    learnings: [
      {
        title: "Escalar de verdad",
        body: "Un componente que sirve a 25 sitios se diseña distinto a uno que sirve a uno. Aprendí a pensar en la API del componente antes que en su markup.",
      },
      {
        title: "Ads vs. performance",
        body: "La publicidad no es negociable en un medio, así que el trabajo real es hacerla convivir con los Core Web Vitals en vez de pelearse con ella.",
      },
      {
        title: "Producción manda",
        body: "Desplegar, monitorear y arreglar lo que se rompe enseña más de un sistema que cualquier documentación.",
      },
      {
        title: "Quedarse 4 años",
        body: "Ver un proyecto crecer durante años te obliga a escribir código que tu yo del futuro pueda leer. Es la mejor escuela de mantenibilidad que conozco.",
      },
    ],
  },

  {
    slug: "one-rides",
    title: "One Rides",
    tagline:
      "App de viajes con 5k+ descargas, donde trabajé features de punta a punta.",
    imageLight: "/img/light/proyectos.png",
    imageDark: "/img/dark/proyectos.png",
    glow: "#22c55e",

    kind: "Producto móvil",
    // TODO: ajustar rol, periodo, duración y equipo con los datos reales.
    role: "Frontend Developer (features full stack)",
    period: "2024 — Presente",
    duration: "Proyecto en curso",
    team: "Equipo pequeño de producto",
    // live: { label: "Ver en la store", href: "https://..." },

    summary:
      "One Rides es una app de viajes con la que llevamos ya un buen tiempo trabajando. Es el proyecto donde más me solté del front puro: además de la interfaz, me tocó bajar al backend para dejar las features completas, de la pantalla al endpoint.",
    challenge:
      "En un equipo chico no hay a quién pasarle la mitad de la feature. Si algo necesita un endpoint, un modelo de datos o un ajuste en la lógica de negocio, sale de la misma persona que está construyendo la pantalla. El reto fue entregar features completas sin que la calidad del front se resintiera por estar mirando también el otro lado.",

    contributions: [
      {
        title: "Producto de punta a punta",
        items: [
          "Desarrollo de features completas: interfaz, estado, integración y la parte de backend que hiciera falta.",
          "Definición de los contratos de datos junto al resto del equipo antes de escribir la pantalla.",
        ],
      },
      {
        title: "Interfaz",
        items: [
          "Construcción de las pantallas a partir del diseño, cuidando estados de carga, error y vacío.",
          "Componentes reutilizables para que las siguientes pantallas costaran menos que la primera.",
        ],
      },
      {
        title: "Calidad",
        items: [
          "Diagnóstico y corrección de bugs reportados por usuarios reales de la app.",
          "Revisión del rendimiento en dispositivos de gama baja, que son los que de verdad se notan.",
        ],
      },
    ],

    headline: { value: "5k+", label: "descargas" },
    // TODO: reemplazar por métricas reales del proyecto.
    metrics: [
      { label: "Features completas, del endpoint a la pantalla", score: "100%" },
      { label: "Descargas de la app en las stores", score: "5000" },
      { label: "Equipo chico con ownership directo", score: "1:1" },
    ],

    // TODO: ajustar al stack real del proyecto.
    stack: ["JavaScript", "TypeScript", "React", "Node.js", "Git"],

    shots: [
      {
        alt: "Pantalla principal de la app",
        caption: "Pantalla principal de la app",
      },
      {
        alt: "Flujo de reserva de un viaje",
        caption: "Flujo de reserva de un viaje",
      },
    ],

    learnings: [
      {
        title: "Salir del front",
        body: "Tocar el backend me cambió la forma de pedir datos. Ahora diseño el endpoint pensando en la pantalla y la pantalla pensando en el endpoint.",
      },
      {
        title: "Usuarios reales",
        body: "Una app con descargas reales te devuelve bugs que ningún entorno local reproduce. Aprendí a leer reportes vagos y llegar a la causa.",
      },
      {
        title: "Ownership",
        body: "En un equipo chico nadie viene a revisar tu trabajo por casualidad. La calidad tiene que salir de uno mismo.",
      },
    ],
  },

  {
    slug: "finance-app",
    title: "FinanceApp",
    tagline:
      "Un proyecto corto e intenso: una interfaz de finanzas construida en semanas.",
    imageLight: "/img/light/proyectos.png",
    imageDark: "/img/dark/proyectos.png",
    glow: "#f97316",

    // TODO: todo el bloque de este proyecto es contenido de arranque.
    // Ajustar rol, fechas, equipo, contribuciones y métricas con los datos reales.
    kind: "Proyecto corto",
    role: "Frontend Developer",
    period: "2023",
    duration: "Cerca de un mes",
    team: "Proyecto puntual, con diseño ya definido",
    // live: { label: "Ver proyecto", href: "https://..." },

    summary:
      "FinanceApp fue uno de esos proyectos cortos que se resuelven en semanas: una interfaz de finanzas personales con paneles, movimientos y visualización de datos. Poco tiempo, alcance cerrado y una sola prioridad: que quedara bien hecho igual.",
    challenge:
      "Cuando el proyecto dura un mes no hay margen para reescribir. Había que elegir bien desde el primer día qué componentes valía la pena abstraer, qué se resolvía directo, y dónde estaba el detalle que iba a hacer que la interfaz se sintiera terminada y no apurada.",

    contributions: [
      {
        title: "Interfaz",
        items: [
          "Maquetación completa de las vistas a partir del diseño, responsive desde el inicio.",
          "Componentes de datos reutilizables para tarjetas, listados y resúmenes.",
        ],
      },
      {
        title: "Datos y estado",
        items: [
          "Integración con la API y manejo de los estados de carga, error y vacío.",
          "Lógica de cálculo y formato de montos, fechas y porcentajes.",
        ],
      },
      {
        title: "Detalle",
        items: [
          "Ajustes de accesibilidad y contraste en toda la interfaz.",
          "Revisión final de rendimiento antes de la entrega.",
        ],
      },
    ],

    headline: { value: "1 mes", label: "de la idea a la entrega" },
    metrics: [
      { label: "Vistas maquetadas y responsive", score: "100%" },
      { label: "Semanas de trabajo hasta la entrega", score: "0004" },
      { label: "Reescrituras necesarias en el proyecto", score: "0000" },
    ],

    // TODO: ajustar al stack real del proyecto.
    stack: ["JavaScript", "React", "Git"],

    shots: [
      {
        alt: "Panel principal con el resumen de cuentas",
        caption: "Panel principal con el resumen",
      },
      { alt: "Listado de movimientos", caption: "Listado de movimientos" },
    ],

    learnings: [
      {
        title: "Alcance cerrado",
        body: "Un mes obliga a decidir rápido qué se abstrae y qué no. Aprendí a reconocer cuándo abstraer es solo procrastinar.",
      },
      {
        title: "Terminado > perfecto",
        body: "El detalle que hace que algo se sienta terminado casi nunca es el que más tiempo toma. Suele ser el último 5%.",
      },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
