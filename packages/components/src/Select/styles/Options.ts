import { css, cx } from "@emotion/css"

import { fontSize } from "../../fragments/dimensions"

export const Options = cx(
  css`
    position: absolute;
    top: 100%;
    width: 100%;
    background-color: rgb(239, 239, 239);
    padding: 0;
    margin: 0;
    > li {
      font-size: ${fontSize};
      list-style: none;
      cursor: pointer;
      &.active {
        background-color: lightgrey;
      }
    }
  `,
  "stpg-select-options"
)
