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

type ThemeToggleProps = {
  inverted: boolean
  onChange?: (checked: boolean) => void
}

export const ThemeToggle = ({ onChange, inverted }: ThemeToggleProps) => (
  <Toggle
    checked={inverted}
    onChange={onChange}
    leftExtra={<Icon icon={faSun} />}
    rightExtra={<Icon icon={faMoon} />}
  />
)
