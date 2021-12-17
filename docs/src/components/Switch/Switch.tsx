import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { IconProps } from "../fragments/BaseProps"
import { SwitchButton, SwitchIcon, Knob, Track } from "./fragments"

export interface CheckedProp {
  checked: boolean
}

type SwitchProps = IconProps & {
  onChange?: (value: boolean) => void
  checked?: boolean
  className?: string
}

export const Switch = ({
  onChange,
  checked = false,
  leftIcon,
  rightIcon,
  className,
}: SwitchProps) => {
  const handleClick = () => onChange?.(!checked)

  return (
    <SwitchButton
      role="switch"
      aria-checked={checked}
      className={className}
      onClick={handleClick}
    >
      <SwitchIcon>{leftIcon && <FontAwesomeIcon icon={leftIcon} />}</SwitchIcon>
      <Knob checked={checked} />
      <Track checked={checked} />
      <SwitchIcon>
        {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
      </SwitchIcon>
    </SwitchButton>
  )
}
