import type { PrismTheme } from "prism-react-renderer"

import { Theme } from "../../../../src"

export const getPrismTheme = ({ color, inverted }: Theme): PrismTheme => ({
  plain: {
    color: inverted ? color.bg.surface : color.fg.surface,
    backgroundColor: inverted ? color.fg.surface : color.bg.shade,
  },
  styles: [
    {
      types: ["punctuation", "symbol", "attr-value", "script"],
      style: {
        color: inverted ? color.bg.surface : color.fg.base,
      },
    },
    {
      types: ["inserted", "function"],
      style: {
        color: color.palette.cyan,
      },
    },
    {
      types: ["string", "char", "selector"],
      style: {
        color: color.palette.green,
      },
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: color.palette.purple,
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: inverted ? color.bg.shade : color.fg.shade,
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: color.palette.orange,
      },
    },
    {
      types: ["tag"],
      style: {
        color: color.palette.yellow,
      },
    },
    {
      types: ["maybe-class-name"],
      style: {
        color: color.palette.red,
      },
    },
  ],
})
