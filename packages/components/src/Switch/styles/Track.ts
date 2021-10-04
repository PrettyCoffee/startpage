import { css, cx } from "@emotion/css"

export const Track = cx(
  css`
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: black;
  `,
  "stpg-switch-track"
)
