"use client";
import { useIsDark } from "@/hooks/useIsDark";
import Image from "next/image";

export const HeroIllustration = () => {
  const isDark = useIsDark();
  return (
    <Image
      src={isDark ? "/img/hero-dark.png" : "/img/hero-light.png"}
      priority
      fill
      sizes="(max-width: 1024px) 100vw, 1024px"
      className="object-cover"
      alt="Ilustración mía trabajando como desarrollador web"
    />
  );
};

