import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

import { Switch } from "./Switch"

const StyledSwitch = styled(Switch)`
  ${({ theme: { color, inverted } }) => {
    const fgLight = inverted ? color.bg.highlight : color.fg.highlight
    const fgDark = inverted ? color.fg.highlight : color.bg.highlight
    return css`
      &[aria-checked="true"] {
        > .stpg-switch-track {
          background-color: ${color.bg.surface};
        }
        > .stpg-switch-knob {
          background-color: ${color.fg.surface};
        }
      }
      > .stpg-switch-extra {
        font-size: 1rem;
        :first-of-type {
          color: ${fgDark};
        }
        :last-of-type {
          color: ${fgLight};
        }
      }
    `
  }}
`

type ThemeToggleProps = {
  inverted: boolean
  onChange?: (checked: boolean) => void
}

export const ThemeToggle = ({ onChange, inverted }: ThemeToggleProps) => (
  <StyledSwitch
    checked={inverted}
    onChange={onChange}
    leftIcon={faSun}
    rightIcon={faMoon}
  />
)
