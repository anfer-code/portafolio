/**
 * Textos del sitio en español. Es el diccionario de referencia: `en.ts` está
 * tipado contra este, así que si acá se agrega una clave, TypeScript reclama
 * hasta que exista también en inglés. Es la única forma de que no queden
 * cadenas sin traducir sin que nadie se entere.
 */
export const es = {
  meta: {
    title: "Anfernee Valera — Frontend Engineer",
    description:
      "Frontend Engineer. Construyo y mantengo interfaces que sirven millones de visitas al día, cuidando el rendimiento tanto como el detalle.",
    ogLocale: "es_ES",
  },

  nav: {
    proyectos: "Proyectos",
    sobreMi: "Sobre mí",
    experiencia: "Experiencia",
    contacto: "Contacto",
    abrirMenu: "Abrir menú",
    cerrarMenu: "Cerrar menú",
    menu: "Menú de navegación",
    cambiarIdioma: "Cambiar a inglés",
  },

  hero: {
    rol: "Frontend Engineer",
    descripcion:
      "Creo experiencias digitales accesibles y optimizadas, con un diseño impecable y amigable.",
    verProyectos: "Ver proyectos",
    linkedin: "Contactar vía LinkedIn",
    ilustracion: "Ilustración mía trabajando como desarrollador web",
  },

  about: {
    saludo: "Hola, soy Anfernee",
    fonetica: "/an · fer · ni/",
    presentacion:
      "Soy un Frontend Developer que disfruta construir experiencias web rápidas, escalables y bien hechas. Con un fuerte enfoque en performance, código reutilizable y atención al detalle.",
    gusto:
      "Me gusta resolver problemas, optimizar lo que ya existe y crear sistemas que escalen sin fricción.",
  },

  proyectos: {
    titulo: "Proyectos en los que he trabajado",
    intro:
      "Cada proyecto me dejó algo: una técnica nueva, un problema que no había resuelto antes o una forma distinta de pensar el front-end. Estos son algunos de los que más disfruté construir.",
    vistaPrevia: (titulo: string) => `Vista previa del proyecto ${titulo}`,
  },

  stack: {
    titulo: "Stack",
    notas: "Notas",
  },

  experiencia: {
    titulo: "Experiencia",
  },

  cta: {
    titulo: "¿Tienes una buena oportunidad en mente?",
    texto:
      "Estoy abierto a nuevos retos como Frontend Developer en equipos remotos. Si crees que encajo en lo que están construyendo, hablemos.",
    escribir: "Escribir un correo",
  },

  contacto: {
    titulo: "Hablemos",
    subtitulo: "Llega directo a mi bandeja.",
    nombre: "Nombre",
    nombrePlaceholder: "¿Cómo te llamas?",
    correo: "Correo",
    correoPlaceholder: "tu@correo.com",
    mensaje: "Mensaje",
    mensajePlaceholder: "Cuéntame en qué estás pensando.",
    enviar: "Enviar mensaje",
    enviando: "Enviando…",
    cerrar: "Cerrar",
    enviado: "Mensaje enviado",
    enviadoTexto:
      "Te respondo al correo que dejaste, normalmente en menos de un día.",
  },

  proyecto: {
    volver: "Volver a proyectos",
    rol: "Rol",
    duracion: "Duración",
    mision: "La misión",
    reto: "El reto",
    stack: "Stack",
    stackTexto: "Las herramientas con las que se trabajó en el proyecto.",
    loQueHice: "Lo que hice",
    loQueHiceTexto: "Mis aportes más relevantes, agrupados por objetivos.",
    impacto: "Impacto",
    impactoTexto: "Números que dejé en el proyecto.",
    resultados: "Resultados del proyecto",
    capturas: "Capturas del proyecto",
    imagenPendiente: "Imagen pendiente",
    ampliar: "Ampliar",
    cerrar: "Cerrar",
    aprendizajes: "Lo que me llevo",
    aprendizajesTexto: "Toca una nota para leerla completa.",
    otrosProyectos: "Otros proyectos",
    anterior: "Anterior",
    siguiente: "Siguiente",
    ficha: {
      tipo: "Tipo",
      rol: "Rol",
      periodo: "Periodo",
      equipo: "Equipo",
    },
  },

  footer: {
    derechos: "Todos los derechos reservados.",
  },
};
