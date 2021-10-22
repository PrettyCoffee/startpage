import { css, cx } from "@emotion/css"

import { fontSize, height } from "../../fragments/dimensions"

export const Header = cx(
  css`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    height: ${height};
    gap: ${fontSize};
    padding: 0 ${fontSize};
    font-size: ${fontSize};
    background-color: rgb(239, 239, 239);
  `,
  "stpg-select-header"
)
