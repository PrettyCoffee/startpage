import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { getTheme } from "../../../src"
import { ColorSchemeName } from "../../../src/base/colors"
import { Button } from "../components"
import { ThemeToggle } from "../components/ThemeToggle"
import { ColorPanel } from "./ColorPanel"

const Container = styled.div`
  width: fit-content;
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
    <Container>
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
        <ThemeToggle onChange={setInverted} />
      </ButtonPanel>
      <ColorPanel theme={getTheme(currentTheme, inverted)} />
    </Container>
  )
}
