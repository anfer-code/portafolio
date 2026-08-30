export type Job = {
  role: string;
  company: string;
  period: string;
  description?: string;
  responsibilities: string[];
};

export const experience: Job[] = [
  {
    role: "Desarrollador Frontend Semi-Senior",
    company: "Futbol Sites - A part of Better Collective",
    period: "Jul 2022 — Presente",
    description:
      "Desarrollo y mantengo múltiples sitios web de medios digitales, trabajando en la creación de nuevos sitios y features, optimización de performance y monetización.",
    responsibilities: [
      "Desarrollo e integración de nuevas funcionalidades y componentes reutilizables.",
      "Creación de nuevos sitios web, adaptando su diseño a la arquitectura actual y optimizando sus Core Web Vitals.",
      "Desarrollo de features cross-team enfocados en la escalabilidad del front-end.",
      "Gestión de despliegues a producción y mantenimiento continuo de los sitios web.",
      "Monitoreo, diagnóstico y resolución de bugs.",
      "Optimización de performance y Core Web Vitals.",
      "Implementación y mantenimiento de AdSense y Optidigital como sistemas de monetización.",
      "Gestión técnica, trazabilidad y documentación de tareas mediante JIRA.",
    ],
  },
  {
    role: "Desarrollador Frontend",
    company: "UP global group",
    period: "Feb 2022 — Jun 2022",
    responsibilities: [
      "Desarrollo de sitio web responsive con React.js y Material UI.",
      "Desarrollo de Scripts en JS orientado a la lógica de negocio: porcentajes, filtros, orden de relevancia.",
      "Implementación de librería de terceros para multilenguaje, carruseles y SEO.",
      "Implementaciones con web3.js y Moralis: conexión con la wallet, floor price, transacciones y owner.",
    ],
  },
];
