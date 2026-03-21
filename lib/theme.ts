/**
 * ============================================================
 * THEME CONFIGURATION — Single Source of Truth
 * ============================================================
 *
 * Change any color here to update the entire website instantly.
 * All components and CSS use these values via CSS custom properties.
 *
 * Color palette based on:
 *   Primary:       #2F6B3F  (deep forest green)
 *   Primary Light: #7FB77E  (soft sage green)
 *   Accent:        #FFF6C0  (warm cream / pale yellow)
 */

export type ThemeMode = "dark" | "light";

export interface ThemeColors {
  "--background": string;
  "--foreground": string;
  "--primary": string;
  "--primary-light": string;
  "--secondary": string;
  "--accent": string;
  "--muted": string;
  "--border": string;
  "--card-bg": string;
  "--glass": string;
  "--primary-rgb": string;       // for rgba() usage
  "--primary-light-rgb": string; // for rgba() usage
  "--accent-rgb": string;        // for rgba() usage
  "--foreground-rgb": string;    // for rgba() usage
  "--gradient-start": string;
  "--gradient-end": string;
  "--nav-bg": string;
  "--heading-color": string;
  "--text-primary": string;
  "--text-secondary": string;
  "--text-tertiary": string;
  "--scrollbar-track": string;
}

export const themes: Record<ThemeMode, ThemeColors> = {
  dark: {
    "--background": "#0a1a0f",
    "--foreground": "#f0f7f1",
    "--primary": "#2F6B3F",
    "--primary-light": "#7FB77E",
    "--secondary": "#FFF6C0",
    "--accent": "#FFF6C0",
    "--muted": "#132a1a",
    "--border": "rgba(127, 183, 126, 0.12)",
    "--card-bg": "rgba(13, 30, 18, 0.8)",
    "--glass": "rgba(127, 183, 126, 0.05)",
    "--primary-rgb": "47, 107, 63",
    "--primary-light-rgb": "127, 183, 126",
    "--accent-rgb": "255, 246, 192",
    "--foreground-rgb": "240, 247, 241",
    "--gradient-start": "#2F6B3F",
    "--gradient-end": "#7FB77E",
    "--nav-bg": "rgba(10, 26, 15, 0.88)",
    "--heading-color": "#f0f7f1",
    "--text-primary": "rgba(240, 247, 241, 0.9)",
    "--text-secondary": "rgba(240, 247, 241, 0.6)",
    "--text-tertiary": "rgba(240, 247, 241, 0.4)",
    "--scrollbar-track": "#0a1a0f",
  },
  light: {
    "--background": "#fefdf4",
    "--foreground": "#1a2e1f",
    "--primary": "#2F6B3F",
    "--primary-light": "#7FB77E",
    "--secondary": "#FFF6C0",
    "--accent": "#e8d97a",
    "--muted": "#f0eed8",
    "--border": "rgba(47, 107, 63, 0.15)",
    "--card-bg": "rgba(255, 253, 244, 0.9)",
    "--glass": "rgba(47, 107, 63, 0.06)",
    "--primary-rgb": "47, 107, 63",
    "--primary-light-rgb": "127, 183, 126",
    "--accent-rgb": "232, 217, 122",
    "--foreground-rgb": "26, 46, 31",
    "--gradient-start": "#2F6B3F",
    "--gradient-end": "#7FB77E",
    "--nav-bg": "rgba(254, 253, 244, 0.88)",
    "--heading-color": "#1a2e1f",
    "--text-primary": "rgba(26, 46, 31, 0.9)",
    "--text-secondary": "rgba(26, 46, 31, 0.6)",
    "--text-tertiary": "rgba(26, 46, 31, 0.4)",
    "--scrollbar-track": "#fefdf4",
  },
};
