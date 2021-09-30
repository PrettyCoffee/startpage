import { ColorScheme } from "../colors/colorsScheme"

export interface Theme {
  inverted: boolean
  color: ColorScheme
  space: {
    smallest: string
    small: string
    medium: string
    large: string
    largest: string
  }
  breakpoints: {
    mobile: string
    landscape: string
    tablet: string
    laptop: string
  }
}
