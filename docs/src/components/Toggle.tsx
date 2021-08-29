import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const height = "2rem"
const width = "4rem"

const Icon = styled(FontAwesomeIcon)`
  ${({ theme: { space, color } }) => css`
    height: ${space.medium};
    width: ${space.medium};
    :first-of-type {
      transform: translateX(-0.5rem);
      color: ${color.bg.shade};
    }
    :last-of-type {
      transform: translateX(0.5rem);
      color: ${color.fg.highlight};
    }
  `}
`
const Knob = styled.div<{ checked: boolean }>`
  ${({ theme: { space, color }, checked }) => css`
    position: absolute;
    z-index: 1;
    width: calc(${height} - 8px);
    height: calc(${height} - 8px);
    border-radius: 50%;
    transform: translateX(-${space.medium});
    transition: 0.5s;
    background-color: ${color.fg.highlight};
    ${checked &&
    css`
      transform: translateX(${space.medium});
      background-color: ${color.bg.shade};
    `}
  `}
`
const Input = styled.input`
  position: absolute;
  z-index: 2;
  cursor: pointer;
  width: 100%;
  height: 100%;
  opacity: 0;
`
const ToggleWrapper = styled.div<{ checked: boolean }>`
  ${({ theme: { space, color }, checked }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width};
    height: ${height};
    border-radius: calc(${space.medium});
    transition: 0.5s;
    box-shadow: 0 0 ${space.medium} ${color.bg.shade};
    background-color: ${color.bg.surface};
    ${checked &&
    css`
      background-color: ${color.fg.surface};
    `}
  `}
`

type ToggleProps = {
  onChange: (checked: boolean) => void
  leftIcon: IconProp
  rightIcon: IconProp
}

export const Toggle = ({ onChange, leftIcon, rightIcon }: ToggleProps) => {
  const [checked, setChecked] = React.useState(false)
  const handleChange = () => {
    setChecked(!checked)
    onChange(!checked)
  }
  return (
    <ToggleWrapper checked={checked}>
      <Icon icon={leftIcon} />
      <Knob checked={checked} />
      <Icon icon={rightIcon} />
      <Input type="checkbox" checked={checked} onClick={handleChange} />
    </ToggleWrapper>
  )
}
