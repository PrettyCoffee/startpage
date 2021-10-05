import { css, cx } from "@emotion/css"

import { fontSize } from "./dimensions"

export const Wrapper = cx(
  css`
    position: relative;
    font-size: ${fontSize};
  `,
  "stpg-select"
)
