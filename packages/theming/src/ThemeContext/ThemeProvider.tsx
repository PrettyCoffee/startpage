import React from "react"

import { useStorage } from "@startpage/local-storage"

import { getTheme, Theme } from "../theme"
import { ThemeContext } from "./ThemeContext"

export type ThemeProviderProps = {
  /** Persists the theme in the local storage. Usefull if you want the theme to be customizable by the user. */
  persistTheme?: boolean
  /** Initial theme which will be used until you change it with the setter. */
  initialTheme?: Theme
}

/** Provider for the global theme.
 * The theme can be accessed by using the `useTheme` hook.
 */
export const ThemeProvider = ({
  persistTheme,
  initialTheme = getTheme(),
  children,
}: React.PropsWithChildren<ThemeProviderProps>) => {
  // We make this variable a constant value which cannot change.
  // Caused by this, we can use those hooks "conditionally".

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ENABLE_LOCAL_STORAGE = React.useMemo(() => persistTheme, [])

  const [theme, setTheme] = ENABLE_LOCAL_STORAGE
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useStorage("theme", initialTheme)
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      React.useState(initialTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
