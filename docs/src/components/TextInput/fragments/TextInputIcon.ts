import { css } from "@emotion/react"
import styled from "@emotion/styled"

type TextInputIconProps = {
  position: "left" | "right"
}

export const TextInputIcon = styled.span<TextInputIconProps>`
  ${({ theme: { color, space }, position }) => css`
    position: absolute;
    z-index: 1;
    color: ${color.fg.highlight};
    width: ${space.largest};
    display: flex;
    justify-content: center;

    ${position === "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
  `}
`
