import { findTech } from "@/data/stack";
import Image from "next/image";

type TechChipProps = {
  name: string;
};

// Si la tecnología está en el stack del sitio se acompaña con su ícono; si no
// (herramientas puntuales de un proyecto), el chip queda de solo texto.
export const TechChip = ({ name }: TechChipProps) => {
  const tech = findTech(name);

  return (
    <li className="glass flex items-center gap-2 rounded-md bg-glass px-3 py-1.5">
      {tech && (
        <Image
          src={tech.icon}
          alt=""
          width={20}
          height={20}
          className="size-5 object-contain"
        />
      )}
      <span className="text-sm text-main-text">{name}</span>
    </li>
  );
};
