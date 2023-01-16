import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { SwitchButton } from "./SwitchButton"
import { CheckedProp } from "../Switch"

export const Track = styled.span<CheckedProp>`
  ${({ theme: { color, space }, checked }) => css`
    position: absolute;
    z-index: 0;
    height: 100%;
    width: 100%;

    transition: background-color 0.5s;
    border-radius: ${space.medium};
    box-shadow: 0 4px 0 ${color.bg.shade};
    background-color: ${color.bg.surface};

    ${SwitchButton}:focus-visible > & {
      box-shadow: 0 4px 0 ${color.fg.shade};
      outline: ${color.fg.shade} solid 2px;
    }

    ${checked &&
    css`
      background-color: ${color.fg.surface};
    `}
  `}
`
