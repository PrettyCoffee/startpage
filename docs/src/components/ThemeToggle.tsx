import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Toggle } from "../../../src"

const Icon = styled(FontAwesomeIcon)`
  ${({ theme: { space } }) => css`
    height: ${space.medium};
    width: ${space.medium};
  `}
`

type ThemeToggleProps = {
  onChange?: (checked: boolean) => void
}

export const ThemeToggle = ({ onChange }: ThemeToggleProps) => {
  const [inverted, setInverted] = React.useState(false)
  const handleToggle = () => {
    setInverted(!inverted)
    onChange?.(!inverted)
  }
  return (
    <Toggle
      checked={inverted}
      onChange={handleToggle}
      leftExtra={<Icon icon={faSun} />}
      rightExtra={<Icon icon={faMoon} />}
    />
  )
}
