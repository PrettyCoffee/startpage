import { css, cx } from "@emotion/css"

import { height } from "./dimensions"

export const Knob = cx(
  css`
    position: absolute;
    z-index: 2;
    width: calc(${height} - 8px);
    height: calc(${height} - 8px);
    background-color: white;
  `,
  "stpg-switch-knob"
)
