import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const BaseButton = styled.button`
  ${({ theme: { color, space } }) => css`
    height: ${space.largest};
    padding: 0 ${space.medium};

    display: inline-flex;
    align-items: center;
    gap: ${space.small};

    font-size: ${space.medium};
    color: ${color.fg.surface};
    background-color: ${color.bg.surface};
    box-shadow: 0 4px 0 ${color.bg.shade};
    border: none;
    border-radius: ${space.small};
    outline: none;
    cursor: pointer;

    :hover {
      background-color: ${color.bg.highlight};
      color: ${color.fg.surface};
    }
    :active {
      background-color: ${color.bg.surface};
    }
    :focus-visible {
      box-shadow: 0 4px 0 ${color.fg.shade};
      outline: ${color.fg.shade} solid 2px;
    }
  `}
`
