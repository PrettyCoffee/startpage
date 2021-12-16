import { ColorScheme } from "./color/ColorScheme"

export interface Spacing {
  smallest: string
  small: string
  medium: string
  large: string
  largest: string
}

export interface StpgTheme {
  inverted: boolean
  color: ColorScheme
  space: Spacing
}
