import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { getTheme, useTheme } from "@startpage/theming"

import { ThemeToggle } from "../components/ThemeToggle"

const logoLight = new URL("../../../static/logo-light.svg", import.meta.url)
  .href
const logoDark = new URL("../../../static/logo-dark.svg", import.meta.url).href

const Container = styled.header`
  ${({ theme: { color, space } }) => css`
    position: sticky;
    z-index: 100;
    top: 0;

    box-sizing: border-box;
    height: calc(${space.large} * 3);
    padding: 0 ${space.large};
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${color.bg.surface};
    box-shadow: 0 4px 0 ${color.bg.shade};
  `}
`

const Logo = styled.img`
  ${({ theme: { space, color } }) => css`
    height: calc(${space.largest});
    filter: drop-shadow(0 0.5px 0 ${color.bg.shade})
      drop-shadow(0 1px 0 ${color.bg.shade})
      drop-shadow(0 1.5px 0 ${color.bg.shade})
      drop-shadow(0 2px 0 ${color.bg.shade});
  `}
`

export const Header = () => {
  const [theme, setTheme] = useTheme()

  const handleToggle = () =>
    setTheme(getTheme(theme.color.name, !theme.inverted))

  return (
    <Container>
      <Logo src={theme.inverted ? logoDark : logoLight} />
      <ThemeToggle inverted={theme.inverted} onChange={handleToggle} />
    </Container>
  )
}
