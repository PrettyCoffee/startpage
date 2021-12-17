import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { IconProps } from "../fragments/BaseProps"
import { BaseButton } from "./BaseButton"

export type ButtonProps = IconProps & {
  onClick?: () => void
}

export const Button = ({
  leftIcon,
  rightIcon,
  children,
  ...buttonProps
}: React.PropsWithChildren<ButtonProps>) => (
  <BaseButton {...buttonProps}>
    {leftIcon && (
      <span>
        <FontAwesomeIcon icon={leftIcon} />
      </span>
    )}
    {children}
    {rightIcon && (
      <span>
        <FontAwesomeIcon icon={rightIcon} />
      </span>
    )}
  </BaseButton>
)
