import type { es } from "./es";

/**
 * Textos del sitio en inglés.
 *
 * El tipo sale del diccionario español, así que TypeScript obliga a que las
 * dos versiones tengan exactamente las mismas claves. Si mañana se agrega una
 * en `es.ts` y se olvida acá, el build falla en vez de mostrar un hueco.
 */
export const en: typeof es = {
  meta: {
    title: "Anfernee Valera — Frontend Engineer",
    description:
      "Frontend Engineer. I build and maintain interfaces that serve millions of visits a day, caring about performance as much as the details.",
    ogLocale: "en_US",
  },

  nav: {
    proyectos: "Projects",
    sobreMi: "About",
    experiencia: "Experience",
    contacto: "Contact",
    abrirMenu: "Open menu",
    cerrarMenu: "Close menu",
    menu: "Navigation menu",
    cambiarIdioma: "Switch to Spanish",
  },

  hero: {
    rol: "Frontend Engineer",
    descripcion:
      "I build accessible, fast digital experiences with a design that feels polished and easy to use.",
    verProyectos: "See projects",
    linkedin: "Reach me on LinkedIn",
    ilustracion: "Pixel-art illustration of me working as a web developer",
  },

  about: {
    saludo: "Hi, I'm Anfernee",
    fonetica: "/an · fer · nee/",
    presentacion:
      "I'm a Frontend Developer who enjoys building web experiences that are fast, scalable and well made, with a strong focus on performance, reusable code and attention to detail.",
    gusto:
      "I like solving problems, improving what already exists and building systems that scale without friction.",
  },

  proyectos: {
    titulo: "Projects I've worked on",
    intro:
      "Every project left me something: a new technique, a problem I hadn't solved before, or a different way of thinking about front-end. These are the ones I most enjoyed building.",
    vistaPrevia: (titulo: string) => `Preview of the ${titulo} project`,
  },

  stack: {
    titulo: "Stack",
    notas: "Notes",
  },

  experiencia: {
    titulo: "Experience",
  },

  cta: {
    titulo: "Got a good opportunity in mind?",
    texto:
      "I'm open to new challenges as a Frontend Developer on remote teams. If you think I'd fit what you're building, let's talk.",
    escribir: "Send me an email",
  },

  contacto: {
    titulo: "Let's talk",
    subtitulo: "It lands straight in my inbox.",
    nombre: "Name",
    nombrePlaceholder: "What's your name?",
    correo: "Email",
    correoPlaceholder: "you@email.com",
    mensaje: "Message",
    mensajePlaceholder: "Tell me what you have in mind.",
    enviar: "Send message",
    enviando: "Sending…",
    cerrar: "Close",
    enviado: "Message sent",
    enviadoTexto:
      "I'll reply to the address you left, usually within a day.",
  },

  proyecto: {
    volver: "Back to projects",
    rol: "Role",
    duracion: "Duration",
    mision: "The mission",
    reto: "The challenge",
    stack: "Stack",
    stackTexto: "The tools the project was built with.",
    loQueHice: "What I did",
    loQueHiceTexto: "My most relevant contributions, grouped by goal.",
    impacto: "Impact",
    impactoTexto: "Numbers I left behind on this project.",
    resultados: "Project results",
    capturas: "Project screenshots",
    imagenPendiente: "Image pending",
    ampliar: "Expand",
    cerrar: "Close",
    aprendizajes: "What I take with me",
    aprendizajesTexto: "Tap a note to read it in full.",
    otrosProyectos: "Other projects",
    anterior: "Previous",
    siguiente: "Next",
    ficha: {
      tipo: "Type",
      rol: "Role",
      periodo: "Period",
      equipo: "Team",
    },
  },

  footer: {
    derechos: "All rights reserved.",
  },
};
