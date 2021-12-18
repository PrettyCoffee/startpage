import {injectThemeIntoCss, ThemeConsumer, ThemeProvider} from "@startpage/theming"
import { getTheme } from "@startpage/preset"
import { PropsWithChildren } from "react"

export const Providers = ({ children }: PropsWithChildren<unknown>) => 
    <ThemeProvider initialTheme={getTheme("nord")}>
      <ThemeConsumer>
        {({ theme }) => {
          injectThemeIntoCss(theme)
          return children
        }}
      </ThemeConsumer>
    </ThemeProvider>
