import { ColorScheme } from "../colors/colorsScheme"

interface Spacing {
  smallest: string
  small: string
  medium: string
  large: string
  largest: string
}

export interface Theme {
  inverted: boolean
  color: ColorScheme
  space: Spacing
}
