import { css, cx } from "@emotion/css"

import { height } from "./dimensions"

export const Input = cx(
  css`
    height: ${height};
    appearance: none;
    position: absolute;
    cursor: pointer;
    font-size: 1rem;
    background-color: transparent;
    color: transparent;
    width: 100%;
    right: 0;
    left: 0;
  `,
  "select-input"
)
