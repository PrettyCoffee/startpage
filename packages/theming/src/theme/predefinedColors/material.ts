import { createColorScheme } from "../../colors"

//https://material.io/design/color/the-color-system.html#tools-for-picking-colors
export const material = createColorScheme(
  "material",
  {
    bg: "#212121",
    fg: "#b9b9b9", // original: E0E0E0
    primary: "#4CAF50",
    secondary: "#ab47bc",
  },
  {
    red: "#ef5350",
    green: "#66bb6a",
    yellow: "#ffee58",
    blue: "#42a5f5",
    purple: "#ab47bc",
    cyan: "#26c6da",
    orange: "#ffa726",
  }
)
