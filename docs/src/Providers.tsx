import React from "react"

import { css, Global, ThemeProvider as EmotionTheme } from "@emotion/react"
import { StoragePrefixProvider } from "@startpage/local-storage"
import { getTheme } from "@startpage/preset"
import { ThemeConsumer, ThemeProvider, Theme } from "@startpage/theming"

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
    line-height: 1.5;
  }
  body {
    margin: 0;
    overflow-x: hidden;
    background-color: ${theme.color.bg.base};
    color: ${theme.color.fg.base};
    font-size: ${theme.space.medium};
  }
`

export const Providers = ({ children }: React.PropsWithChildren<unknown>) => (
  <StoragePrefixProvider prefix="stpg-">
    <ThemeProvider initialTheme={getTheme("nord")} persistTheme={true}>
      <ThemeConsumer>
        {({ theme }) => (
          <EmotionTheme theme={theme}>
            <Global styles={globalStyles(theme)} />
            {children}
          </EmotionTheme>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  </StoragePrefixProvider>
)
