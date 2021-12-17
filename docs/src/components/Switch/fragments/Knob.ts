import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { CheckedProp } from "../Switch"

export const Knob = styled.span<CheckedProp>`
  ${({ theme: { color }, checked }) => css`
    position: absolute;
    z-index: 2;
    width: calc(2rem - 8px);
    height: calc(2rem - 8px);
    transform: translateX(-1rem);

    transition: 0.5s;
    background-color: ${color.fg.highlight};
    border-radius: 50%;

    ${checked &&
    css`
      transform: translateX(1rem);
      background-color: ${color.bg.surface};
    `}
  `}
`
