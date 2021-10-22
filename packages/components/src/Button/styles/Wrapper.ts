import { css, cx } from "@emotion/css"

import { fontSize, height, padding } from "../../fragments/dimensions"

export const Wrapper = cx(
  css`
    display: inline-flex;
    height: ${height};
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    font-size: ${fontSize};
    gap: ${fontSize};
    padding: 0 ${padding};
  `,
  "stpg-button"
)
