import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Toggle } from "@startpage/components"

const Icon = styled(FontAwesomeIcon)`
  ${({ theme: { space } }) => css`
    height: ${space.medium};
    width: ${space.medium};
  `}
`

const StyledToggle = styled(Toggle)`
  ${({ theme: { color, inverted } }) => {
    const fgLight = inverted ? color.bg.highlight : color.fg.highlight
    const fgDark = inverted ? color.fg.highlight : color.bg.highlight
    return css`
      transition: 0.5s;
      box-shadow: 0 4px 0 ${color.bg.shade};
      background-color: ${color.bg.surface};
      > .toggle-knob {
        background-color: ${color.fg.highlight};
      }
      > .toggle-extra {
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
  <StyledToggle
    checked={inverted}
    onChange={onChange}
    leftExtra={<Icon icon={faSun} />}
    rightExtra={<Icon icon={faMoon} />}
  />
)
