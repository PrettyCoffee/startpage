import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { getTheme, useTheme } from "../../../src"
import { ThemeToggle } from "../components/ThemeToggle"

const logoDark = new URL("../../../static/logo-dark-base.svg", import.meta.url)
  .href
const logoLight = new URL(
  "../../../static/logo-light-base.svg",
  import.meta.url
).href

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
  const [logo, setLogo] = React.useState(logoDark)

  const handleToggle = (inverted: boolean) => {
    setTheme(getTheme(theme.color.name, inverted))
    setLogo(inverted ? logoLight : logoDark)
  }

  return (
    <Container>
      <Logo src={logo} />
      <ThemeToggle onChange={handleToggle} />
    </Container>
  )
}
