import { ColorScheme, ColorSchemeName, colorSchemes } from "./colors"

export interface Theme {
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

const space = {
  smallest: "0.125rem",
  small: "0.5rem",
  medium: "1rem",
  large: "1.5rem",
  largest: "3rem",
}

const breakpoints = {
  mobile: "@media only screen and (max-width: 360px)",
  landscape: "@media only screen and (max-width: 768px)",
  tablet: "@media only screen and (max-width: 1024px)",
  laptop: "@media only screen and (max-width: 1440px)",
}

const getColorScheme = (name?: string) =>
  colorSchemes.find(scheme => scheme.name === name) || colorSchemes[0]

export const getTheme = (colorScheme?: ColorSchemeName): Theme => ({
  color: getColorScheme(colorScheme),
  space: space,
  breakpoints: breakpoints,
})
