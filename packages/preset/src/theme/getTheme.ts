import { getInvertedColorScheme } from "./color"
import { ColorScheme } from "./color/ColorScheme"
import { atom, dracula, material, nord } from "./color/predefinedSchemes"
import { StpgTheme } from "./StpgTheme"

const colorSchemes: ColorScheme[] = [atom, nord, dracula, material]

const getColorScheme = (name?: string, inverted?: boolean): ColorScheme => {
  const colors =
    colorSchemes.find(scheme => scheme.name === name) || colorSchemes[0]
  return inverted ? getInvertedColorScheme(colors) : colors
}

const space = {
  smallest: "0.125rem",
  small: "0.5rem",
  medium: "1rem",
  large: "1.5rem",
  largest: "3rem",
}

/**
 * Used to read the predefined themes
 * Available color schemes: atom, dracula, nord, material
 *
 * @param colorScheme the name of the predefined color scheme you want to use
 * @param inverted inverts the color scheme
 *
 * @returns the theme object
 */
export const getTheme = (
  colorScheme?: string,
  inverted?: boolean
): StpgTheme => ({
  inverted: inverted || false,
  color: getColorScheme(colorScheme, inverted),
  space: space,
})
