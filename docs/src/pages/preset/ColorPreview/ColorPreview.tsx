import React from "react"

import { css, ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import { getTheme } from "@startpage/preset"

import { ColorPanel } from "./ColorPanel"
import { TabGroup, Tab, ThemeToggle } from "../../../components"

const ThemeToggleLayout = styled.div`
  ${({ theme: { space } }) => css`
    position: absolute;
    top: 0;
    right: 0;
    height: ${space.largest};
    display: flex;
    align-items: center;
  `}
`

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`

const availableThemes = ["atom", "dracula", "nord", "material"]

const themes = ["atom", "dracula", "nord", "material"]

export const ColorPreview = () => {
  const [currentTheme, setCurrentTheme] = React.useState(availableThemes[0])
  const [inverted, setInverted] = React.useState(false)
  return (
    <EmotionThemeProvider theme={getTheme(currentTheme, inverted)}>
      <Wrapper>
        <ThemeToggleLayout>
          <ThemeToggle inverted={inverted} onChange={setInverted} />
        </ThemeToggleLayout>
        <TabGroup onChange={index => setCurrentTheme(themes[index])}>
          {themes.map(theme => (
            <Tab key={theme} title={theme}>
              <ColorPanel theme={getTheme(theme, inverted)} />
            </Tab>
          ))}
        </TabGroup>
      </Wrapper>
    </EmotionThemeProvider>
  )
}
