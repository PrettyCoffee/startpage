import { css, cx } from "@emotion/css"

import { fontSize, height } from "./dimensions"

export const Input = cx(
  css`
    flex: 1;
    width: 100%;
    height: ${height};
    box-sizing: border-box;
    font-size: ${fontSize};
  `,
  "text-input"
)
