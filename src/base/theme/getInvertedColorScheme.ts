import { ColorScheme } from "./colors"

/**
 * Inverts the passed color scheme
 *
 * @param colorScheme the color scheme you want to invert
 *
 * @returns the inverted color scheme
 */
export const getInvertedColorScheme = (
  colorScheme: ColorScheme
): ColorScheme => {
  const { bg, fg, primary, secondary, palette, name } = colorScheme
  return {
    name,
    bg: fg,
    fg: bg,
    primary: {
      bg: primary.fg,
      base: primary.base,
      fg: primary.bg,
    },
    secondary: {
      bg: secondary.fg,
      base: secondary.base,
      fg: secondary.bg,
    },
    palette,
  }
}
