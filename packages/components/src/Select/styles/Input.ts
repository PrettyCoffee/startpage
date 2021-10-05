import { css, cx } from "@emotion/css"

export const Input = cx(
  css`
    height: 100%;
    width: 100%;
    appearance: none;
    position: absolute;
    cursor: pointer;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
    color: transparent;

    > option {
      color: initial;
    }
  `,
  "stpg-select-input"
)
