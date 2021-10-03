import { css } from "@emotion/css"
import { getTheme } from "@startpage/theming"

const { color, space } = getTheme("nord")

export const defaultStyles = css`
  background-color: ${color.bg.surface};
  transition: 0.2s;
  border-radius: ${space.small};
  box-shadow: 0 4px 0 ${color.bg.shade};
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
  > span {
    padding-left: ${space.medium};
    color: ${color.fg.highlight};
  }
  > input {
    padding: 0 ${space.medium};
    color: ${color.fg.highlight};
    background-color: transparent;
    border: none;
    outline: none;
    ::placeholder {
      color: ${color.fg.shade};
    }
  }
`
