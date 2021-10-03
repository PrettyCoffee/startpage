import { css, cx } from "@emotion/css"

import { height } from "./dimensions"

export const Knob = cx(
  css`
    position: absolute;
    z-index: 1;
    width: calc(${height} - 8px);
    height: calc(${height} - 8px);
    border-radius: 50%;
    transition: 0.5s;
    transform: translateX(-1rem);
    &.active {
      transform: translateX(1rem);
    }
  `,
  "toggle-knob"
)
