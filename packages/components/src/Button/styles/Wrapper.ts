import { css, cx } from "@emotion/css"

import { fontSize, height } from "./dimensions"

export const Wrapper = cx(
  css`
    display: inline-flex;
    height: ${height};
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    font-size: ${fontSize};
  `,
  "button"
)
