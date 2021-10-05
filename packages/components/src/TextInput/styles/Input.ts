import { css, cx } from "@emotion/css"

import { fontSize } from "./dimensions"

export const Input = cx(
  css`
    flex: 1;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: inherit;
    padding: 0 ${fontSize};
  `,
  "stpg-text-input"
)
