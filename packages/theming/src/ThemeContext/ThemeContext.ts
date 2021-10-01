import { createContext } from "react"

import { getTheme, Theme } from "../theme"

export type ThemeState = [Theme, (theme: Theme) => void]

const defaultTheme: ThemeState = [getTheme(), () => null]

export const ThemeContext = createContext(defaultTheme)
