import { css, cx } from "@emotion/css"

import { height, width } from "./dimensions"

export const Wrapper = cx(
  css`
    display: inline-flex;
    height: ${height};
    align-items: center;
    width: ${width};
    box-sizing: border-box;
  `,
  "text"
)
