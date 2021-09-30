import { css } from "@emotion/css"
import { getTheme } from "@startpage/theming"

const { color, space } = getTheme("nord")

export const defaultStyles = css`
  position: relative;
  display: flex;
  height: ${space.largest};
  align-items: center;
  background-color: ${color.bg.surface};
  width: 20rem;
  transition: 0.2s;
  box-sizing: border-box;
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
    flex: 1;
    height: ${space.largest};
    box-sizing: border-box;
    padding: 0 ${space.medium};

    font-size: ${space.large};
    color: ${color.fg.highlight};
    background-color: transparent;

    border: none;
    outline: none;
    width: 100%;

    ::placeholder {
      color: ${color.fg.shade};
    }
  }
`
