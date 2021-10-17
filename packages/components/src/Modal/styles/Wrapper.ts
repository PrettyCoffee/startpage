import { css, cx } from "@emotion/css"

export const Wrapper = cx(
  css`
    position: fixed;
    z-index: 100;
    border: 1px solid black;
    background-color: white;
    inset: 10rem;
  `,
  "stpg-modal"
)
