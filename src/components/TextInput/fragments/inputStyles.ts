import { css } from "@emotion/css"

import { getTheme } from "../../../base"

const { color, space } = getTheme("atom")

const getShadow = (color: string, offset: string) =>
  `${offset} ${offset} 0 ${color}`

export const inputStyles = css`
  position: relative;
  display: flex;
  height: ${space.largest};
  align-items: center;
  background-color: ${color.base.darkest};
  margin: ${space.large};
  width: 20rem;
  border-radius: ${space.large};
  transition: 0.2s;
  box-sizing: border-box;
  box-shadow: ${getShadow(color.palette.blue, "4px")};
  :hover {
    box-shadow: ${getShadow(color.palette.blue, "2px")};
    transform: translate(2px, 2px);
  }
  > span {
    > span > span {
      background-color: ${color.palette.blue};
      transition: 0.2s;
    }
    padding: 0 ${space.medium};
  }
  > span.left-input-extra {
    border-right: 2px solid ${color.palette.blue};
  }
  > span.right-input-extra {
    border-left: 2px solid ${color.palette.blue};
  }
  > label {
    position: absolute;
    bottom: ${space.smallest};
    right: ${space.largest};
    font: 500 ${space.small} Arial;
    color: ${color.base.lightest};
  }
  > input {
    flex: 1;
    height: ${space.largest};
    padding: 0 ${space.medium};
    box-sizing: border-box;

    font-size: ${space.large};
    color: ${color.base.lightest};
    background-color: transparent;

    border: none;
    outline: none;
    width: 100%;

    ::placeholder {
      color: ${color.base.basic};
    }
  }
`
