import { css, cx } from "@emotion/css"

import { fontSize, height } from "../../fragments/dimensions"

const width = "15rem"

export const Wrapper = cx(
  css`
    height: ${height};
    width: ${width};
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    gap: ${fontSize};
    padding: 0 ${fontSize};
  `,
  "stpg-text"
)
