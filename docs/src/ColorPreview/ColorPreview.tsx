import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

import { getTheme } from "../../../src"
import { ColorSchemeName } from "../../../src/base/colors"
import { Button } from "../components"
import { Toggle } from "../components/Toggle"
import { ColorPanel } from "./ColorPanel"

const ButtonPanel = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: ${space.small} 0;
  `}
`
const ThemeButtons = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    > button {
      margin-right: ${space.small};
    }
  `}
`

const availableThemes: ColorSchemeName[] = [
  "atom",
  "dracula",
  "nord",
  "material",
]

export const ColorPreview = () => {
  const [currentTheme, setCurrentTheme] = React.useState(availableThemes[0])
  const [inverted, setInverted] = React.useState(false)
  return (
    <div>
      <ButtonPanel>
        <ThemeButtons>
          {availableThemes.map(theme => (
            <Button
              key={theme}
              active={currentTheme === theme}
              onClick={() => setCurrentTheme(theme)}
            >
              {theme}
            </Button>
          ))}
        </ThemeButtons>
        <Toggle leftIcon={faSun} rightIcon={faMoon} onChange={setInverted} />
      </ButtonPanel>
      <ColorPanel theme={getTheme(currentTheme, inverted)} />
    </div>
  )
}
