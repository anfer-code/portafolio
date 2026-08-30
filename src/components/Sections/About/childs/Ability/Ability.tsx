import type { StatAnimation } from "@/data/stats";
import Image from "next/image";

export enum PageType {
  PROJECT = "project",
  DEFAULT = "default",
}

type AbilityProps = {
  icon: string;
  animation: StatAnimation;
  /** Desfase para que los íconos no se muevan sincronizados. */
  delay?: string;
  type?: PageType;
  /** Ajuste del alto del dibujo: los PNG recortados no comparten proporcion. */
  iconSize?: string;
};

// Cada bracket: posición de esquina (offset negativo = 4px afuera del slot).
const CORNERS = [
  "-top-1 -left-1",
  "-top-1 -right-1",
  "-bottom-1 -left-1",
  "-bottom-1 -right-1",
];

const ANIMATIONS: Record<StatAnimation, string> = {
  flip: "animate-icon-flip",
  flipDiagonal: "animate-icon-diagflip",
  turn: "animate-icon-turn",
};

const SLOT_BACKGROUNDS: Record<PageType, string> = {
  [PageType.DEFAULT]:
    "bg-[url('/img/light/item-bg.svg')] dark:bg-[url('/img/dark/item-bg.svg')]",
  [PageType.PROJECT]:
    "bg-[url('/img/fondo-project.png')] dark:bg-[url('/img/dark/item-bg.svg')]",
};
export const Ability = ({
  icon,
  animation,
  delay = "0s",
  type = PageType.DEFAULT,
  iconSize = "size-5.5",
}: AbilityProps) => (
  <div
    className={`relative flex size-9.5 shrink-0 items-center justify-center bg-contain bg-center bg-no-repeat [perspective:200px] ${SLOT_BACKGROUNDS[type]}`}
  >
    <Image
      src={icon}
      alt=""
      width={34}
      height={34}
      className={`object-contain ${iconSize} ${ANIMATIONS[animation]}`}
      style={{ animationDelay: delay }}
    />

  {type === PageType.DEFAULT && CORNERS.map((pos) => (
      <span
        key={pos}
        className={`absolute size-1.25 bg-[#F5B668] dark:bg-[#E5D1FF] ${pos}`}
      />
    ))}
  </div>
);
