export type Tech = {
  name: string;
  icon: string;
};

export const stack: Tech[] = [
  { name: "JavaScript", icon: "/img/stack/js.png" },
  { name: "React", icon: "/img/stack/react.png" },
  { name: "Node.js", icon: "/img/stack/nodejs.png" },
  { name: "TypeScript", icon: "/img/stack/typescript.png" },
  { name: "Next.js", icon: "/img/stack/nextjs.png" },
  { name: "Git", icon: "/img/stack/git.png" },
  { name: "Antigravity", icon: "/img/stack/antigravity.png" },
  { name: "Claude", icon: "/img/stack/claude.svg" },
];

// Las tecnologías de un proyecto se nombran por string: las que existen aquí
// se pintan con su ícono y el resto cae en un chip de solo texto.
export const findTech = (name: string) =>
  stack.find((tech) => tech.name === name);
