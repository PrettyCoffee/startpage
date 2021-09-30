import { css } from "@emotion/css"
import { getTheme } from "@startpage/theming"

const { color } = getTheme("nord")

export const defaultStyles = css`
  box-shadow: 0 4px 0 ${color.bg.shade};
  background-color: ${color.bg.surface};
  &.active {
    background-color: ${color.fg.surface};
  }
  > .toggle-knob {
    background-color: ${color.fg.highlight};
    &.active {
      background-color: ${color.bg.shade};
    }
  }
  > .toggle-extra {
    :first-of-type {
      color: ${color.bg.shade};
    }
    :last-of-type {
      color: ${color.fg.highlight};
    }
  }
`
