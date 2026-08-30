export type Soundtrack = {
  title: string;
  src: string;
};

/**
 * Bandas sonoras por tema. Estar en esta lista NO descarga nada:
 * solo se pide la pista sorteada, y recién cuando el visitante da play.
 * (La primera de cada lista es la principal del set.)
 */
export const soundtracks: Record<"light" | "night", Soundtrack[]> = {
  light: [
    { title: "Spring Feeling — Stardew Valley", src: "/audio/light/spring-feeling.mp3" },
    { title: "Falling Leaves — Stardew Valley", src: "/audio/light/falling-leaves.mp3" },
    { title: "Home — Stardew Valley", src: "/audio/light/home.mp3" },
    { title: "Lifeline — Stardew Valley", src: "/audio/light/lifeline.mp3" },
  ],
  night: [
    { title: "First Steps — Celeste", src: "/audio/night/first-steps.mp3" },
    { title: "Checking In — Celeste", src: "/audio/night/checking-in.mp3" },
    { title: "Calm with rain — Minecraft", src: "/audio/night/calm-rain.mp3" },
    { title: "Winter Expedition — Stardew Valley", src: "/audio/night/winter-expedition.mp3" },
  ],
};

/** Elige una pista al azar del set que corresponde al tema. */
export const pickTrack = (isDark: boolean): Soundtrack => {
  const list = soundtracks[isDark ? "night" : "light"];
  return list[Math.floor(Math.random() * list.length)];
};
