import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Wrapper } from "./Wrapper"

type InputProps = {
  hasLeftIcon: boolean
  hasRightIcon: boolean
}

export const Input = styled.input<InputProps>`
  ${({ theme: { color, space }, hasLeftIcon, hasRightIcon }) => css`
    flex: 1;
    width: 100%;
    height: 100%;
    padding-left: ${hasLeftIcon ? space.largest : space.medium};
    padding-right: ${hasRightIcon ? space.largest : space.medium};
    font-size: inherit;

    background-color: ${color.bg.surface};
    color: ${color.fg.highlight};
    border-radius: ${space.small};
    box-shadow: 0 4px 0 ${color.bg.shade};
    border: none;
    outline: none;

    ::placeholder {
      color: ${color.fg.shade};
    }

    :focus-visible {
      box-shadow: 0 4px 0 ${color.fg.shade};
      outline: ${color.fg.shade} solid 2px;
    }

    ${Wrapper}:hover > & {
      background-color: ${color.bg.highlight};
    }
  `}
`
