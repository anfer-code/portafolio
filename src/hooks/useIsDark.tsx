"use client";
import { STORAGE_KEY, DARK_THEME, THEME_EVENT } from "@/config";
import { useSyncExternalStore } from "react";

const getSnapshot = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return stored === DARK_THEME;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const getServerSnapshot = () => {
  return false;
};

const suscribe = (callback: () => void) => {
  window.addEventListener(THEME_EVENT, callback);
  return () => window.removeEventListener(THEME_EVENT, callback);
};

export const useIsDark = () => {
  const isDark = useSyncExternalStore(suscribe, getSnapshot, getServerSnapshot);
  return isDark;
};
