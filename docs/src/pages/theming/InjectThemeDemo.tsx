import React, { PropsWithChildren, useState } from "react"

import { injectThemeIntoCss, ThemeConsumer, ThemeProvider, useTheme } from "@startpage/theming"

import { Button, RowLayout } from "../../components"
import { getTheme } from "@startpage/preset"

export const InjectThemeDemo = () => {
  const [clicked, setClicked] = useState(false)
  const { theme } = useTheme()

  const handleClick = () => {
    injectThemeIntoCss(theme, "stpg")
    setClicked(true);
  }

  return (
    <RowLayout>
      <Button onClick={handleClick}>Inject theme</Button>
      {clicked && "Now take a look into the browser devtools!"}
    </RowLayout>
  )
}

export const ThemeWrapper = ({children}: PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider initialTheme={getTheme()}>
      <ThemeConsumer>
        {({ theme }) => {
          // we directly inject the provided theme with the consumer
          injectThemeIntoCss(theme)
          return children;
        }}
      </ThemeConsumer>
    </ThemeProvider>
  )
}
