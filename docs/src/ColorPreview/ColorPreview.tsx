import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { getTheme, Toggle } from "../../../src"
import { ColorSchemeName } from "../../../src/base/colors"
import { Button } from "../components"
import { ColorPanel } from "./ColorPanel"

const Icon = styled(FontAwesomeIcon)`
  ${({ theme: { space } }) => css`
    height: ${space.medium};
    width: ${space.medium};
  `}
`

const ButtonPanel = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: ${space.medium} 0;
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
        <Toggle
          checked={inverted}
          onChange={setInverted}
          leftExtra={<Icon icon={faSun} />}
          rightExtra={<Icon icon={faMoon} />}
        />
      </ButtonPanel>
      <ColorPanel theme={getTheme(currentTheme, inverted)} />
    </div>
  )
}
