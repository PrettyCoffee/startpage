import { createContext } from "react"

import { getTheme, Theme } from "../theme"

export type ThemeState = { theme: Theme; setTheme: (theme: Theme) => void }

const defaultTheme: ThemeState = { theme: getTheme(), setTheme: () => null }

export const ThemeContext = createContext(defaultTheme)
