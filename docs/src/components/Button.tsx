import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const Button = styled.button<{ active?: boolean }>`
  ${({ theme: { color, space }, active }) => css`
    background-color: ${active ? color.bg.highlight : color.bg.surface};
    box-shadow: 0 0 ${space.medium} ${color.bg.shade};
    color: ${color.fg.surface};
    border: none;
    border-radius: ${space.small};
    padding: 0 ${space.medium};
    height: ${space.largest};
    cursor: pointer;
    :hover {
      background-color: ${color.bg.highlight};
      color: ${color.fg.surface};
    }
  `}
`
