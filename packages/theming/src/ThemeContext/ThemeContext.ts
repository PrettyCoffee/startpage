import { createContext } from "react"

import { Theme } from "../Theme"

export type ThemeState = { theme: Theme; setTheme: (theme: Theme) => void }

const defaultTheme: ThemeState = { theme: {}, setTheme: () => null }

export const ThemeContext = createContext(defaultTheme)
