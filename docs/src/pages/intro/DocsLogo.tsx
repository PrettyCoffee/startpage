import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { useTheme } from "@startpage/theming"

const logoLight = new URL("../../../static/logo-light.svg", import.meta.url)
  .href
const logoDark = new URL("../../../static/logo-dark.svg", import.meta.url).href

const Logo2 = styled.img`
  ${({ theme: { space } }) => css`
    height: calc(${space.largest} * 4);
    margin-top: calc(${space.largest});
  `}
`

export const DocsLogo2 = () => {
  const { theme } = useTheme()
  return <Logo2 src={theme.inverted ? logoDark : logoLight} />
}

const Logo = styled.div<{ inverted: boolean }>`
  ${({ theme: { space, color }, inverted }) => css`
    height: calc(${space.largest} * 4);
    margin-top: calc(${space.largest});

    background-color: black;

    background: linear-gradient(
      60deg,
      ${color.secondary.fg} 0%,
      ${color.secondary.base} 45%,
      ${color.primary.base} 55%,
      ${color.primary.fg} 100%
    );

    mask-image: url(${inverted ? logoDark : logoLight});
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  `}
`

export const DocsLogo = () => {
  const {theme} = useTheme()
  return <Logo inverted={theme.inverted} />
}
