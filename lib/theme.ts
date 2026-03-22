export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  "--background": string;
  "--foreground": string;
  "--primary": string;
  "--primary-rgb": string;
  "--primary-light": string;
  "--primary-light-rgb": string;
  "--secondary": string;
  "--accent": string;
  "--muted": string;
  "--border": string;
  "--glass": string;
  "--glass-border": string;
  "--nav-bg": string;
  "--card-bg": string;
  "--text-primary": string;
  "--text-secondary": string;
  "--text-tertiary": string;
  "--heading-color": string;
  "--gradient-start": string;
  "--gradient-end": string;
  "--selection-bg": string;
}

export const themes: Record<ThemeMode, ThemeColors> = {
  dark: {
    "--background": "#000000",
    "--foreground": "#F5F5F7",
    "--primary": "#2997FF",
    "--primary-rgb": "41, 151, 255",
    "--primary-light": "#64D2FF",
    "--primary-light-rgb": "100, 210, 255",
    "--secondary": "#BF5AF2",
    "--accent": "#2997FF",
    "--muted": "#1C1C1E",
    "--border": "rgba(255, 255, 255, 0.08)",
    "--glass": "rgba(28, 28, 30, 0.72)",
    "--glass-border": "rgba(255, 255, 255, 0.1)",
    "--nav-bg": "rgba(0, 0, 0, 0.72)",
    "--card-bg": "#1C1C1E",
    "--text-primary": "#F5F5F7",
    "--text-secondary": "#86868B",
    "--text-tertiary": "#48484A",
    "--heading-color": "#FFFFFF",
    "--gradient-start": "#2997FF",
    "--gradient-end": "#BF5AF2",
    "--selection-bg": "rgba(41, 151, 255, 0.3)",
  },
  light: {
    "--background": "#F5F5F7",
    "--foreground": "#1D1D1F",
    "--primary": "#0071E3",
    "--primary-rgb": "0, 113, 227",
    "--primary-light": "#2997FF",
    "--primary-light-rgb": "41, 151, 255",
    "--secondary": "#BF5AF2",
    "--accent": "#0071E3",
    "--muted": "#FFFFFF",
    "--border": "rgba(0, 0, 0, 0.06)",
    "--glass": "rgba(255, 255, 255, 0.72)",
    "--glass-border": "rgba(0, 0, 0, 0.08)",
    "--nav-bg": "rgba(251, 251, 253, 0.72)",
    "--card-bg": "#FFFFFF",
    "--text-primary": "#1D1D1F",
    "--text-secondary": "#6E6E73",
    "--text-tertiary": "#86868B",
    "--heading-color": "#1D1D1F",
    "--gradient-start": "#0071E3",
    "--gradient-end": "#BF5AF2",
    "--selection-bg": "rgba(0, 113, 227, 0.15)",
  },
};
