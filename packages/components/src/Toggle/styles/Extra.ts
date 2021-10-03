import { css, cx } from "@emotion/css"

import { height } from "./dimensions"

export const Extra = cx(
  css`
    height: ${height};
    width: ${height};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  "toggle-extra"
)
