import { useContext } from "react"

import { ThemeContext } from "./ThemeContext"

/** Hook for accessing the global theme.
 * Can only be used if the `ThemeProvider` is a Parent component.
 *
 * @returns the theme state
 */
export const useTheme = () => useContext(ThemeContext)
