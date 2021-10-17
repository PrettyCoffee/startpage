import React from "react"

import {
  css,
  Global,
  Theme,
  ThemeProvider as EmotionTheme,
} from "@emotion/react"
import { getTheme, ThemeConsumer, ThemeProvider } from "@startpage/theming"

const globalStyles = (theme: Theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap");
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
    font-family: Quicksand, sans-serif;
    font-weight: 500;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    overflow: overlay;
    background-color: ${theme.color.bg.base};
    color: ${theme.color.fg.base};
    font-size: ${theme.space.medium};
  }
`

export const Providers = ({ children }: React.PropsWithChildren<unknown>) => (
  <ThemeProvider initialTheme={getTheme("nord")} persistTheme={true}>
    <ThemeConsumer>
      {([theme]) => (
        <EmotionTheme theme={theme}>
          <Global styles={globalStyles(theme)} />
          {children}
        </EmotionTheme>
      )}
    </ThemeConsumer>
  </ThemeProvider>
)
