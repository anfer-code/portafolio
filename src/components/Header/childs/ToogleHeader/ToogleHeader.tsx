"use client";
import { DARK_THEME, LIGHT_THEME, STORAGE_KEY, THEME_EVENT } from "@/config";
import { useIsDark } from "@/hooks/useIsDark";
import Image from "next/image";
import { useEffect } from "react";

export const ToggleHeader = () => {
  const isDark = useIsDark();

  useEffect(() => {
    document.documentElement.classList.toggle(DARK_THEME, isDark);
  }, [isDark]);

  const toogleTheme = () => {
    localStorage.setItem(STORAGE_KEY, isDark ? LIGHT_THEME : DARK_THEME);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      className="h-14 w-15 flex items-center justify-center"
      onClick={toogleTheme}
      aria-label="Cambiar tema"
    >
      {/* Los assets vienen con el color contrario al que toca en cada tema
          (la nube es blanca y el sol negro), así que se invierten. */}
      <Image
        className="invert"
        width={20}
        height={20}
        src={isDark ? "/sun.svg" : "/cloud.svg"}
        alt=""
      />
    </button>
  );
};
