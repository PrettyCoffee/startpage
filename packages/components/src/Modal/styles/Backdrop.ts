import { css, cx } from "@emotion/css"

export const Backdrop = cx(
  css`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  `,
  "stpg-modal-backdrop"
)
