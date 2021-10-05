import { css, cx } from "@emotion/css"

import { fontSize, height } from "./dimensions"

export const Header = cx(
  css`
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    height: ${height};
    gap: ${fontSize};
    padding: 0 ${fontSize};
  `,
  "stpg-select-header"
)
