import { css, cx } from "@emotion/css"

import { fontSize, height } from "./dimensions"

export const Wrapper = cx(
  css`
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    height: ${height};
    font-size: ${fontSize};
  `,
  "select"
)
