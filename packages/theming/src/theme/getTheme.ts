import { getInvertedColorScheme, ColorScheme, ColorSchemeName } from "../colors"
import { atom, dracula, material, nord } from "./predefinedColors"
import { Theme } from "./theme"

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
})
