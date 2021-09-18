import React from "react"

import {
  css,
  Global,
  Theme,
  ThemeProvider as EmotionTheme,
} from "@emotion/react"

import { getTheme, ThemeContext, ThemeProvider } from "../../src"

const globalStyles = (theme: Theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.color.fg.base};
    border-radius: 10px;
  }
  * {
    font: normal 400 1rem Quicksand;
  }
  body {
    margin: 0;
    overflow: overlay;
    background-color: ${theme.color.bg.base};
    color: ${theme.color.fg.base};
  }
`

export const Providers = ({ children }: React.PropsWithChildren<unknown>) => (
  <ThemeProvider initialTheme={getTheme("nord")} persistTheme={true}>
    <ThemeContext.Consumer>
      {([theme]) => (
        <EmotionTheme theme={theme}>
          <Global styles={globalStyles(theme)} />
          {children}
        </EmotionTheme>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
)
