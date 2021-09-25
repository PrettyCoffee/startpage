// for greyscale: https://www.colorhexa.com/282a36-to-f8f8f2 -> 4th from light

import { createColorScheme } from "./createColorScheme"

export type ColorSchemeName = string

export type ColorPalette = {
  red: string
  green: string
  yellow: string
  blue: string
  purple: string
  cyan: string
  orange: string
}

export type GreyScale = {
  shade: string
  base: string
  surface: string
  highlight: string
}

export type ColorGradient = {
  bg: string
  base: string
  fg: string
}

export interface ColorScheme {
  name: ColorSchemeName

  bg: GreyScale
  fg: GreyScale

  primary: ColorGradient
  secondary: ColorGradient
  palette: ColorPalette
}

export const colorSchemes: ColorScheme[] = [
  createColorScheme(
    "atom",
    {
      bg: "#282c34",
      fg: "#b0b7c2", // original: dcdfe4
      primary: "#2490E9", // original: 61afef
      secondary: "#D43542", // original: E06C75
    },
    {
      red: "#E06C75",
      green: "#98C379",
      yellow: "#E5C07B",
      blue: "#61AFEF",
      purple: "#C678DD",
      cyan: "#56B6C2",
      orange: "#FFBB7C",
    }
  ),
  // https://github.com/dracula/dracula-theme
  createColorScheme(
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
  ),

  //https://github.com/arcticicestudio/nord
  createColorScheme(
    "nord",
    {
      bg: "#2E3440",
      fg: "#a6b4cd", // original: D8DEE9
      primary: "#579190", // original: 8FBCBB
      secondary: "#4A7197", // original: 81A1C1
    },
    {
      red: "#BF616A",
      green: "#A3BE8C",
      yellow: "#EBCB8B",
      blue: "#5E81AC",
      purple: "#B48EAD",
      cyan: "#88C0D0",
      orange: "#D08770",
    }
  ),
  //https://material.io/design/color/the-color-system.html#tools-for-picking-colors
  createColorScheme(
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
  ),
]
