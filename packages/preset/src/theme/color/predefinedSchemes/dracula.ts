import { createColorScheme } from "../createColorScheme"

// https://github.com/dracula/dracula-theme
export const dracula = createColorScheme(
  "dracula",
  {
    bg: "#282a36",
    fg: "#b3b3b1", // original: d0d0cf
    primary: "#FF2EA6", // original: ff79c6
    secondary: "#10F84B", // original: 50fa7b
  },
  {
    red: "#ff5555",
    green: "#50fa7b",
    yellow: "#f1fa8c",
    blue: "#6272a4",
    purple: "#bd93f9",
    cyan: "#8be9fd",
    orange: "#ffb86c",
  }
)
