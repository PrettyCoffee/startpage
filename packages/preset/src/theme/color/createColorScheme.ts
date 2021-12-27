import Color from "color"

import {
  ColorGradient,
  ColorPalette,
  ColorScheme,
  GreyScale,
} from "./ColorScheme"

const defaultPalette: ColorPalette = {
  red: "#E06C75",
  green: "#98C379",
  yellow: "#E5C07B",
  blue: "#61AFEF",
  purple: "#C678DD",
  cyan: "#56B6C2",
  orange: "#FFBB7C",
}

const getGreyScale = (base: string): GreyScale => {
  const color = Color(base)
  return {
    shade: color.darken(0.2).hex(),
    base: color.hex(),
    surface: color.lighten(0.2).hex(),
    highlight: color.lighten(0.4).hex(),
  }
}

const getColorGradient = (base: string, isInverted: boolean): ColorGradient => {
  const color = Color(base)
  if (isInverted)
    return {
      bg: color.lighten(0.5).hex(),
      base: color.hex(),
      fg: color.darken(0.5).hex(),
    }
  return {
    bg: color.darken(0.5).hex(),
    base: color.hex(),
    fg: color.lighten(0.5).hex(),
  }
}

export type BaseColors = {
  bg: string
  fg: string
  primary: string
  secondary: string
}

/**
 * Function to create color schemes
 *
 * @param name the name of your color scheme
 * @param base the base colors which are used to create the gradients
 * @param palette the color palette, defaults to the one from the atom theme
 *
 * @returns the color scheme object
 */

export const createColorScheme = (
  name: string,
  base: BaseColors,
  palette = defaultPalette
): ColorScheme => ({
  name: name,

  bg: getGreyScale(base.bg),
  fg: getGreyScale(base.fg),

  primary: getColorGradient(base.primary, Color(base.bg).isLight()),
  secondary: getColorGradient(base.secondary, Color(base.bg).isLight()),

  palette,
})
