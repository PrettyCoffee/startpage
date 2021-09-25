import { createContext } from "react"

import { getTheme, Theme } from "../../base/theme/theme"

export type ThemeState = [Theme, (theme: Theme) => void]

const defaultTheme: ThemeState = [getTheme(), () => null]

/** Context for global theme accessing.
 * Use the `ThemeProvider` to use the context.
 * The theme can be accessed by using the `useTheme` hook while inside the ThemeProvider.
 */
export const ThemeContext = createContext(defaultTheme)
