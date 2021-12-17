import React from "react"

import { ThemeProvider } from "@emotion/react"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { getTheme } from "@startpage/preset"

import { Switch } from "./Switch"

type ThemeToggleProps = {
  inverted: boolean
  onChange?: (checked: boolean) => void
}

export const ThemeToggle = ({ onChange, inverted }: ThemeToggleProps) => (
  <ThemeProvider theme={getTheme("atom")}>
    <Switch
      checked={inverted}
      onChange={onChange}
      leftIcon={faSun}
      rightIcon={faMoon}
    />
  </ThemeProvider>
)
