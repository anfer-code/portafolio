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
      className="bg-glass glass h-14 w-15 rounded-lg flex items-center justify-center"
      onClick={toogleTheme}
      aria-label="Cambiar tema"
    >
      <Image
        width={20}
        height={20}
        src={isDark ? "/cloud.svg" : "/sun.svg"}
        alt=""
      />
    </button>
  );
};
