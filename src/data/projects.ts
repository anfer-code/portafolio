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
    live: { label: "Ver sitio", href: "https://www.futbolsites.net/" },
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
      { label: "Sitios con Core Web Vitals en verde", score: "LCP -40%, TTBF: -30%" },
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
      "Transporte y encomiendas: features de punta a punta en Android, iOS, backend y web.",
    imageLight: "/img/light/proyectos.png",
    imageDark: "/img/dark/proyectos.png",
    glow: "#22c55e",

    kind: "Transporte y delivery",
    role: "Desarrollador full stack: movil, web y backend",
    period: "Jun 2026 — Presente",
    duration: "2 meses",
    team: "Tres desarrolladores sobre backend, apps nativas y paneles",
    // TODO: agregar el enlace a la store si se quiere enlazar.
    // live: { label: "Ver en la store", href: "https://..." },

    summary:
      "One Rides es una plataforma de transporte de pasajeros y encomiendas que opera en Venezuela, con apps nativas para pasajero y conductor, un backend en Node y siete paneles web. Los tomé como clientes junto a dos compañeros desarrolladores para mantener y hacer crecer ese sistema: doce repositorios en producción, cuatro plataformas avanzando en paralelo.",
    challenge:
      "Acá una feature no termina en una pantalla. Un cambio de contrato arranca en el modelo de Mongoose y sigue en los servicios de Angular, en los DTO de Kotlin y en los modelos de Swift: si una de las cuatro capas queda atrás, el viaje se rompe en producción. Y encima el sistema mueve dinero real y gente real en la calle, así que no hay ventana cómoda para equivocarse.",

    contributions: [
      {
        title: "Pagos y billetera",
        items: [
          "Integración del flujo de Pago Móvil de Bancaribe: validación por webhook bancario, aprobación de recargas y reclamos por referencia.",
          "Directorio de números de pago asociados, con verificación por OTP y rechazo de números ya usados en otra cuenta.",
          "Entrada de montos al estilo de la banca venezolana, de derecha a izquierda, replicada en Android, iOS y panel web.",
        ],
      },
      {
        title: "Estabilidad en producción",
        items: [
          "Diagnóstico y corrección del cierre forzado de la app de conductor al llegar un viaje con la pantalla bloqueada.",
          "Corrección del bucle de navegación que reseteaba el mapa e impedía aceptar viajes.",
          "Rastreo de la falla real en la reasignación de conductor: viajes huérfanos acumulados, no la categoría del vehículo.",
        ],
      },
      {
        title: "Integridad del despacho",
        items: [
          "Restricción de autoclickers en la app de conductor: detección en el dispositivo, validación en servidor y gesto de deslizar para aceptar.",
          "Ventana exclusiva de asignación para conductores favoritos, configurable desde el backend.",
          "Bloqueo de conductores por parte del cliente, cableado de la API al panel de administración y a las cuatro apps.",
        ],
      },
      {
        title: "Multiplataforma y entorno",
        items: [
          "Features completas en Kotlin, Swift, Node y Angular, coordinando el mismo cambio de contrato en las cuatro capas.",
          "Entorno local aislado y despliegue a QA, documentados para que el resto del equipo los pueda repetir.",
          "Documentación técnica de cada feature y trazabilidad de las tareas en ClickUp.",
        ],
      },
    ],

    headline: { value: "12", label: "repos en paralelo" },
    metrics: [
      { label: "Cierres forzados de conductor atacados", score: "5100" },
      { label: "Commits en dos meses de trabajo", score: "0174" },
      { label: "Plataformas mantenidas en paralelo", score: "0004" },
      { label: "Actualizaciones publicadas en las stores", score: "0003" },
    ],

    stack: [
      "TypeScript",
      "Node.js",
      "Git",
      "Kotlin",
      "Swift",
      "Angular",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "ClickUp",
    ],

    shots: [
      {
        alt: "Pantalla de solicitud de viaje en la app de pasajero",
        caption: "Solicitud de viaje en la app de pasajero",
      },
      {
        alt: "Flujo de pago móvil con validación de la referencia bancaria",
        caption: "Validación del pago móvil",
      },
    ],

    learnings: [
      {
        title: "Deslizar, no tocar",
        body: "Algunos conductores usaban autoclickers para acaparar viajes. Por eso aceptar dejó de ser un botón: ahora se desliza, y el servidor descarta las aceptaciones con reflejos imposibles.",
      },
      {
        title: "Perdidos en el mar",
        body: "Cuando un mapa no sabe dónde está, cae en latitud 0, longitud 0: un punto vacío en medio del Atlántico. Ver ahí a los conductores fue la señal de que el mapa se rehacía entero a cada segundo.",
      },
      {
        title: "Hoy no existía",
        body: "Venezuela va cuatro horas detrás de Londres, y por esa diferencia el calendario de viajes programados calculaba mal el día: podías reservar para mañana, pero no para dentro de dos horas.",
      },
      {
        title: "La única salida",
        body: "Pagabas, salía “Estamos validando tu pago” y el botón de atrás quedaba bloqueado esperando al banco. Si el banco no contestaba nunca, la única forma de salir era cerrar la app a la fuerza.",
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
