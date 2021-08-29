import React from "react"

import { css, Global, ThemeProvider as EmotionTheme } from "@emotion/react"
import { render } from "react-dom"

import { ThemeProvider, ThemeContext, getTheme, Theme } from "../../src"
import { ColorPreview } from "./ColorPreview/ColorPreview"

const globalStyles = (theme: Theme) => css`
  body {
    margin: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.color.bg.base};
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    width: 100%;
  }
`

const App = () => (
  <ThemeProvider initialTheme={getTheme("dracula")}>
    <ThemeContext.Consumer>
      {([theme]) => (
        <EmotionTheme theme={theme}>
          <Global styles={globalStyles(theme)} />
          <ColorPreview />
        </EmotionTheme>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
)

render(<App />, document.getElementById("root"))
