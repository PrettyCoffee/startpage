import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const SwitchIcon = styled.span`
  ${({ theme: { color } }) => css`
    position: relative;
    z-index: 1;
    height: 100%;
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1rem;

    :first-of-type {
      color: ${color.bg.highlight};
    }
    :last-of-type {
      color: ${color.fg.highlight};
    }
  `}
`
