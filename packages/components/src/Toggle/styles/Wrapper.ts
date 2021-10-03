import { css, cx } from "@emotion/css"

import { height, width } from "./dimensions"

export const Wrapper = cx(
  css`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: ${width};
    height: ${height};
    border-radius: calc(${height} / 2);
  `,
  "toggle"
)
