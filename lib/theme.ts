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
    "--background": "#0b1e14",
    "--foreground": "#f0f7f2",
    "--primary": "#2D6A4F",
    "--primary-rgb": "45, 106, 79",
    "--primary-light": "#52B788",
    "--primary-light-rgb": "82, 183, 136",
    "--secondary": "#D8F3DC",
    "--accent": "#52B788",
    "--muted": "#122b1c",
    "--border": "rgba(82, 183, 136, 0.15)",
    "--glass": "rgba(11, 30, 20, 0.75)",
    "--glass-border": "rgba(82, 183, 136, 0.2)",
    "--nav-bg": "rgba(11, 30, 20, 0.92)",
    "--card-bg": "rgba(18, 43, 28, 0.6)",
    "--text-primary": "#f0f7f2",
    "--text-secondary": "rgba(240, 247, 242, 0.72)",
    "--text-tertiary": "rgba(240, 247, 242, 0.45)",
    "--heading-color": "#ffffff",
    "--gradient-start": "#2D6A4F",
    "--gradient-end": "#52B788",
    "--selection-bg": "rgba(45, 106, 79, 0.3)",
  },
  light: {
    "--background": "#F7F9F5",
    "--foreground": "#0f2118",
    "--primary": "#2D6A4F",
    "--primary-rgb": "45, 106, 79",
    "--primary-light": "#52B788",
    "--primary-light-rgb": "82, 183, 136",
    "--secondary": "#D8F3DC",
    "--accent": "#2D6A4F",
    "--muted": "#EAF3EC",
    "--border": "rgba(45, 106, 79, 0.14)",
    "--glass": "rgba(247, 249, 245, 0.88)",
    "--glass-border": "rgba(45, 106, 79, 0.18)",
    "--nav-bg": "rgba(247, 249, 245, 0.95)",
    "--card-bg": "rgba(255, 255, 255, 0.95)",
    "--text-primary": "#0f2118",
    "--text-secondary": "#3d5a45",
    "--text-tertiary": "#6b8a74",
    "--heading-color": "#0f2118",
    "--gradient-start": "#2D6A4F",
    "--gradient-end": "#52B788",
    "--selection-bg": "rgba(45, 106, 79, 0.15)",
  },
};
