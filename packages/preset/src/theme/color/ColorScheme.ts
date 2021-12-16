export interface ColorPalette {
  red: string
  green: string
  yellow: string
  blue: string
  purple: string
  cyan: string
  orange: string
}

export interface GreyScale {
  shade: string
  base: string
  surface: string
  highlight: string
}

export interface ColorGradient {
  bg: string
  base: string
  fg: string
}

export interface ColorScheme {
  name: string

  bg: GreyScale
  fg: GreyScale

  primary: ColorGradient
  secondary: ColorGradient
  palette: ColorPalette
}
