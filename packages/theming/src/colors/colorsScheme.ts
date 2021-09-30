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
