"use client";
import { useIsDark } from "@/hooks/useIsDark";
import Image from "next/image";

export const HeroIllustration = ({ alt }: { alt: string }) => {
  const isDark = useIsDark();
  return (
    <Image
      src={isDark ? "/img/hero-dark.png" : "/img/hero-light.png"}
      priority
      fill
      sizes="(max-width: 1024px) 100vw, 1024px"
      // En móvil el recorte se pega al borde izquierdo de la ilustración: es lo
      // único que deja ver la planta, que está al 8.7% del ancho. Con el centro
      // por defecto solo entraban la lámpara y el escritorio, justo debajo del
      // texto. De `md` en adelante la imagen ya se ve entera y vuelve al centro,
      // que es donde está la escena completa.
      className="object-cover object-left md:object-center"
      alt={alt}
    />
  );
};

