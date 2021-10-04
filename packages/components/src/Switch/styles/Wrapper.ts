import { css, cx } from "@emotion/css"

import { height, width } from "./dimensions"

export const Wrapper = cx(
  css`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: ${width};
    height: ${height};
    border: none;
    padding: 0;
    background-color: transparent;

    > span {
      cursor: pointer;
    }

    &[aria-checked="false"] > .stpg-switch-knob {
      transform: translateX(-1rem);
    }
    &[aria-checked="true"] > .stpg-switch-knob {
      transform: translateX(1rem);
    }
  `,
  "stpg-switch"
)
