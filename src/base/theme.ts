import { ColorScheme, ColorSchemeName, colorSchemes } from "./colors"

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

const getColorScheme = (name?: string, inverted?: boolean): ColorScheme => {
  const colors =
    colorSchemes.find(scheme => scheme.name === name) || colorSchemes[0]
  const { bg, fg, primary, secondary } = colors
  return {
    ...colors,
    bg: inverted ? fg : bg,
    fg: inverted ? bg : fg,
    primary: {
      bg: inverted ? primary.fg : primary.bg,
      fg: inverted ? primary.bg : primary.fg,
      base: primary.base,
    },
    secondary: {
      bg: inverted ? secondary.fg : secondary.bg,
      fg: inverted ? secondary.bg : secondary.fg,
      base: secondary.base,
    },
  }
}

/**
 * Used to read the predefined themes
 * Available color schemes: atom, dracula, nord, material
 *
 * @param colorScheme the name of the predefined color scheme you want to use
 * @param inverted if set to true, the color scheme will be inverted
 *
 * @returns a theme
 */
export const getTheme = (
  colorScheme?: ColorSchemeName,
  inverted?: boolean
): Theme => ({
  inverted: inverted || false,
  color: getColorScheme(colorScheme, inverted),
  space: space,
  breakpoints: breakpoints,
})
