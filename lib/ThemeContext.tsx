"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { themes, type ThemeMode, type ThemeColors } from "./theme";

interface ThemeContextValue {
  mode: ThemeMode;
  toggle: () => void;
  setMode: (mode: ThemeMode) => void;
  colors: ThemeColors;
}

// Provide a default value so SSR doesn't throw
const defaultContextValue: ThemeContextValue = {
  mode: "dark",
  toggle: () => {},
  setMode: () => {},
  colors: themes.dark,
};

const ThemeContext = createContext<ThemeContextValue>(defaultContextValue);

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  const palette = themes[mode];

  root.setAttribute("data-theme", mode);

  for (const [key, value] of Object.entries(palette)) {
    root.style.setProperty(key, value);
  }
}

function getInitialMode(): ThemeMode {
  if (typeof window === "undefined") return "dark";

  const stored = localStorage.getItem("theme-mode");
  if (stored === "dark" || stored === "light") return stored;

  if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
  return "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialMode();
    setModeState(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    localStorage.setItem("theme-mode", next);
    applyTheme(next);
  }, []);

  const toggle = useCallback(() => {
    setModeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme-mode", next);
      applyTheme(next);
      return next;
    });
  }, []);

  // Prevent flash of wrong theme but still provide context
  const value: ThemeContextValue = {
    mode,
    toggle,
    setMode,
    colors: themes[mode],
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
