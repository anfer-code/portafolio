import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "futbol-sites",
    title: "Futbol Sites",
    tagline:
      "Una red de más de 25 sitios de fútbol que sirve millones de visitas al día.",
    imageLight: "/img/futbol-portada-light.jpg",
    imageDark: "/img/futbol-portada-dark.jpg",
    glow: "#D8122F",

    kind: "Medios digitales",
    role: "Frontend Developer Semi-Senior",
    period: "Jul 2022 — Jul 2026",
    duration: "4 años",
    team: "Equipo de producto distribuido, con front, back, SEO y ads",
    live: { label: "Ver sitio", href: "https://www.futbolsites.net/" },
    summary:
      "Futbol Sites es la red de medios deportivos de Better Collective en LATAM: sitios de noticias, resultados, tablas y estadísticas de fútbol que en conjunto mueven millones de visitas diarias. Entré en julio de 2022 y en mi paso por la empresa, mantuve esa red junto al equipo de producto.",
    challenge:
      "En futbolsites, los sitios comparten componentes, servicios y arquitectura, así que a la hora de implementar un cambio, es necesario asegurar la escalabilidad desde el primer momento.\nEn este proyecto, cada sitio tiene sus particularidades a nivel de negocio o de locación, lo cual exige un gran nivel de detalle al momento de desarrollar.\nA eso se suma el desafío del performance. Los sitios cargan publicidad y contenido dinámico, lo cual complica el cumplimiento de los Core Web Vitals, desarrollar soluciones que permitan que la publicidad conviva con el contenido y que los sitios carguen rápido es un desafío constante.",

    contributions: [
      {
        title: "Arquitectura y nuevos sitios",
        items: [
          "Creación de nuevos sitios basados en la arquitectura base del proyecto, ya sea reutilizando los múltiples servicios y componentes o realizando modificaciones según el contexto..",
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

    headline: { value: "+5M", label: "usuarios diarios" },
    metrics: [
      { label: "+25 sitios activos en la red", score: "0025" },
      { label: "LCP reducido en los sitios de la red", score: "-40%" },
      { label: "TTFB reducido en los sitios de la red", score: "-30%" },
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
        caption: "Bolavip, sitio insignia de Futbolsites",
        src: "/img/home-futbolsites.jpeg",
      },
      {
        alt: "Tabla de posiciones y resultados en vivo",
        caption: "Tabla de posiciones y resultados en vivo",
        src: "/img/tables-futbolsites.jpeg",
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
        title: "Trabajo en equipo",
        body: "Trabajar en un equipo con mas de 10 personas, te hace entender la importancia de habilidades sociales, como la comunicación, la empatia, el ownership y la responsabilidad. Le doy gracias a mi equipo por enseñarme a ser mejor profesional y mejor persona.",
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
    imageLight: "/img/oneride-portada-light.jpg",
    imageDark: "/img/oneride-portada-dark.jpg",
    glow: "#22c55e",

    kind: "Transporte y delivery - Proyecto",
    role: "Desarrollador full stack: movil, web y backend",
    period: "Jun 2026 — Presente",
    duration: "2 meses",
    team: "Tres desarrolladores sobre backend, apps nativas y paneles",
    live: { label: "Ver en la store", href: "https://play.google.com/store/apps/details?id=com.onerides.customer&hl=es_VE" },

    summary:
      "One Rides es una plataforma de transporte de pasajeros y encomiendas que opera en Venezuela, con apps nativas para pasajero y conductor, un backend en Node y siete paneles web. Los tomé como clientes junto a dos compañeros desarrolladores para mantener y hacer crecer ese sistema: doce repositorios en producción, cuatro plataformas avanzando en paralelo.",
    challenge:
      "Un proyecto exigente y un sistema con muchas piezas: un backend, siete paneles web y cuatro aplicaciones nativas. \n Cada nuevo feature debe ser configurable desde los distintos paneles, completamente funcional desde el front y además soportar la lógica del negocio desde el back. Aquí el monitoreo constante de las 4 aplicaciones es ley para poder detectar y solucionar posibles problemas.",

    contributions: [
      {
        title: "Pagos y billetera",
        items: [
          "Integración de pagos por transferencia bancaria instantánea (Pago Móvil): confirmación automática por webhook, aprobación de recargas y reclamos por número de referencia.",
          "Directorio de números de pago asociados, con verificación por OTP y rechazo de números ya usados en otra cuenta.",
          "Entrada de montos al estilo de la banca venezolana, de derecha a izquierda, replicada en Android, iOS y panel web.",
        ],
      },
      {
        title: "Estabilidad en producción",
        items: [
          "Diagnóstico y corrección del cierre forzado de la app de conductor al llegar un viaje con la pantalla bloqueada.",
          "Corrección en el manejo de los sockets del chat para que la conversación se cierre al cancelar o reasignar un viaje, y el conductor nuevo no reciba lo que se habló con el anterior.",
          "Corrección del bucle de arranque en iOS con la sesión vencida, que dejaba la app clavada en la pantalla de carga sin llegar nunca al inicio.",
        ],
      },
      {
        title: "Integridad del despacho",
        items: [
          "Mejora en la integridad de la aplicación contra autoclickers, con detección en el propio teléfono, validación en el servidor y cambio en la UI.",
          "Ventana exclusiva de asignación para conductores favoritos, configurable desde el backend.",
          "Bloqueo de conductores desde la app de pasajero, conexión con la API, el panel de administración y las cuatro apps, para que un conductor bloqueado no vuelva a recibir sus viajes.",
        ],
      },
      {
        title: "Multiplataforma y entorno",
        items: [
          "Creación de múltiples features nuevos y mejoras en las distintas plataformas en sus respectivas tecnologías.",
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
        src: "/img/oneride-viaje-16x10.jpg",
        full: "/img/oneride-viaje.jpeg",
      },
      {
        alt: "Flujo de pago móvil con validación de la referencia bancaria",
        caption: "Validación del pago móvil",
        src: "/img/oneride-pagomovil-16x10.jpg",
        full: "/img/oneride-pagomovil.jpeg",
      },
    ],

    learnings: [
      {
        title: "Autoclickers",
        body: "Algunos conductores usaban autoclickers para acaparar viajes. Se penso en una solución dividida en distintos frentes: ahora se desliza para evitar el comportamiento más común, y el servidor además rechaza las aceptaciones automatizadas.",
      },
      {
        title: "Ambiente de pruebas",
        body: "Cuando entré al proyecto, todas las pruebas se hacían en producción. Luego de mucha insistencia, logramos convencer al cliente de crear un ambiente de pruebas: ahora ningún usuario se cruza con un viaje a $0,01.",
      },
      {
        title: "Los favoritos primero",
        body: "La aplicación permitía marcar conductores como favoritos, pero eso no cambiaba nada. Ahora los favoritos tienen una ventana de tiempo exclusiva antes que el resto.",
      },
      {
        title: "Que nadie pierda su plata",
        body: "Cancelar un viaje dejaba dinero perdido. Ahora se devuelve todo lo que corresponde, la penalización se cubre con lo ya abonado y la app avisa que el resto vuelve a la billetera.",
      },
    ],
  },

  /* FinanceApp queda fuera de la home por ahora: su ficha todavia es contenido
     de arranque (fechas, equipo y metricas sin confirmar) y al lado de los dos
     proyectos reales se notaba. Para volver a publicarlo, descomentar este
     bloque y completar los TODO de adentro; la grilla de Proyectos vuelve sola
     a tres columnas. */
  /*
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
  */
];
