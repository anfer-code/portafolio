import type { Tech } from "@/data/stack";
import Image from "next/image";

export const TechIcon = ({ name, icon }: Tech) => (
  <Image
    src={icon}
    alt={name}
    title={name}
    width={44}
    height={44}
    className="size-11 object-contain"
  />
);
