export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  "--background": string;
  "--foreground": string;
  "--foreground-rgb": string;
  "--primary": string;
  "--primary-rgb": string;
  "--primary-light": string;
  "--primary-light-rgb": string;
  "--secondary": string;
  "--secondary-rgb": string;
  "--accent": string;
  "--accent-rgb": string;
  "--muted": string;
  "--border": string;
  "--glass": string;
  "--glass-border": string;
  "--nav-bg": string;
  "--card-bg": string;
  "--card-bg-solid": string;
  "--text-primary": string;
  "--text-secondary": string;
  "--text-tertiary": string;
  "--heading-color": string;
  "--gradient-start": string;
  "--gradient-end": string;
  "--selection-bg": string;
  "--scrollbar-track": string;
  "--section-dark-bg": string;
  "--section-alt-bg": string;
  "--section-light-bg": string;
}

export const themes: Record<ThemeMode, ThemeColors> = {
  dark: {
    "--background": "#000000",
    "--foreground": "#F5F5F7",
    "--foreground-rgb": "245, 245, 247",
    "--primary": "#2997FF",
    "--primary-rgb": "41, 151, 255",
    "--primary-light": "#64D2FF",
    "--primary-light-rgb": "100, 210, 255",
    "--secondary": "#BF5AF2",
    "--secondary-rgb": "191, 90, 242",
    "--accent": "#2997FF",
    "--accent-rgb": "41, 151, 255",
    "--muted": "#1C1C1E",
    "--border": "rgba(255, 255, 255, 0.08)",
    "--glass": "rgba(28, 28, 30, 0.72)",
    "--glass-border": "rgba(255, 255, 255, 0.1)",
    "--nav-bg": "rgba(0, 0, 0, 0.72)",
    "--card-bg": "#1C1C1E",
    "--card-bg-solid": "#161618",
    "--text-primary": "#F5F5F7",
    "--text-secondary": "#A1A1A6",
    "--text-tertiary": "#6E6E73",
    "--heading-color": "#FFFFFF",
    "--gradient-start": "#2997FF",
    "--gradient-end": "#BF5AF2",
    "--selection-bg": "rgba(41, 151, 255, 0.3)",
    "--scrollbar-track": "#000000",
    "--section-dark-bg": "#000000",
    "--section-alt-bg": "#0a0a0c",
    "--section-light-bg": "#1C1C1E",
  },
  light: {
    "--background": "#F5F5F7",
    "--foreground": "#1D1D1F",
    "--foreground-rgb": "29, 29, 31",
    "--primary": "#0071E3",
    "--primary-rgb": "0, 113, 227",
    "--primary-light": "#2997FF",
    "--primary-light-rgb": "41, 151, 255",
    "--secondary": "#BF5AF2",
    "--secondary-rgb": "191, 90, 242",
    "--accent": "#0071E3",
    "--accent-rgb": "0, 113, 227",
    "--muted": "#FFFFFF",
    "--border": "rgba(0, 0, 0, 0.08)",
    "--glass": "rgba(255, 255, 255, 0.72)",
    "--glass-border": "rgba(0, 0, 0, 0.08)",
    "--nav-bg": "rgba(251, 251, 253, 0.82)",
    "--card-bg": "#FFFFFF",
    "--card-bg-solid": "#FFFFFF",
    "--text-primary": "#1D1D1F",
    "--text-secondary": "#6E6E73",
    "--text-tertiary": "#86868B",
    "--heading-color": "#1D1D1F",
    "--gradient-start": "#0071E3",
    "--gradient-end": "#BF5AF2",
    "--selection-bg": "rgba(0, 113, 227, 0.15)",
    "--scrollbar-track": "#F5F5F7",
    "--section-dark-bg": "#F5F5F7",
    "--section-alt-bg": "#FAFAFA",
    "--section-light-bg": "#FFFFFF",
  },
};
