import { css, cx } from "@emotion/css"

export const Window = cx(
  css`
    position: fixed;
    inset: 10rem;
    border: 1px solid black;
    background-color: white;
  `,
  "stpg-modal-window"
)
