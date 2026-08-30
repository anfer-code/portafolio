import { Clouds } from "@/components/Clouds/Clouds";

type SkyAreaProps = {
  children: React.ReactNode;
};

/**
 * Fondo de cielo continuo con nubes animadas.
 * Envuelve varias secciones para que compartan un mismo fondo sin cortes.
 * Sin `overflow-hidden` aquí: rompería el `position: sticky` de los hijos
 * (las nubes ya recortan su propio desborde internamente).
 *
 * Nota sobre los assets: el de modo claro es un fondo opaco completo, mientras
 * que el oscuro es solo una capa de trama con transparencia; por eso en oscuro
 * hace falta el color sólido de base debajo.
 */
export const SkyArea = ({ children }: SkyAreaProps) => (
  <div className="relative w-full bg-[#57B9FF] dark:bg-[#171341]">
    <div className="absolute inset-0 z-0 bg-[url('/img/light/large-bg.png')] bg-cover bg-bottom dark:bg-[url('/img/dark/large-bg.png')]" />
    <Clouds />
    <div className="relative z-10">{children}</div>
  </div>
);
