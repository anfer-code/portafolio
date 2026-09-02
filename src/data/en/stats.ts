import type { Stat } from "../types";

/**
 * Las etiquetas ya estaban en inglés en la versión española —son las de una
 * ficha de personaje de videojuego— así que acá solo cambian los valores.
 */
export const stats: Stat[] = [
  {
    icon: "/img/icons/suitcase.png",
    label: "Role",
    value: "Ssr. Frontend Developer",
    animation: "flip",
  },
  {
    icon: "/img/icons/sword.png",
    label: "Secret Weapon",
    value: "A cup of coffee",
    animation: "flipDiagonal",
  },
  {
    icon: "/img/icons/heart.png",
    label: "Super Power",
    value: "Performance tamer",
    animation: "flip",
  },
  {
    icon: "/img/icons/key.png",
    label: "Top Quest",
    value: "Zero bugs in production (someday)",
    animation: "turn",
  },
];
