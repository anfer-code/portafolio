export type Note = {
  title: string;
  /** Contenido que se muestra al abrir la nota. */
  body?: string;
};

export const notes: Note[] = [
  {
    title: "Wins",
    body: "+25 sitios en Futbol Sites, algunos con más de 5M de usuarios diarios. Y features full stack para una app de viajes con 5k+ descargas.",
  },
  {
    title: "Portfolio concept",
    body: "Quería una estética pixel art que se sintiera como un juego, sin renunciar a una UI funcional, rápida y accesible.",
  },
  {
    title: "Side skills",
    body: "WordPress, Shopify y SEO técnico cuando hace falta. Maqueto en Figma por mi cuenta y me muevo cómodo en proyectos fullStack. Además de mucha comunicación y buena vibra en el equipo.",
  },
  {
    title: "Filosofía",
    body: "Código que alguien más pueda leer en seis meses, incluido yo. Y el lema que me acompaña desde que inicie en esto: nunca pares de aprender.",
  },
  {
    title: "IA",
    body: "La uso como copiloto: acelera lo repetitivo, me deja discutir ideas y me da feedback en mi código, así aprendo mientras construyo.",
  },
  {
    title: "Fun facts",
      body: "La dirección creativa y maqueta del sitio fue hecha junto a @nailimer. La idea nació de evitar tendencias repetitivas hechas con IA y expresar mi gusto personal por el pixel art",
  },
];
