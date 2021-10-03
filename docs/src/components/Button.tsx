import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Button as StpgButton,
  ButtonProps as StpgButtonProps,
} from "@startpage/components"

const StyledButton = styled(StpgButton)`
  ${({ theme: { color, space } }) => css`
    background-color: ${color.bg.surface};
    box-shadow: 0 4px 0 ${color.bg.shade};
    color: ${color.fg.surface};
    border: none;
    border-radius: ${space.small};
    padding: 0 ${space.medium};
    gap: ${space.small};
    :hover {
      background-color: ${color.bg.highlight};
      color: ${color.fg.surface};
    }
    &.active {
      background-color: ${color.bg.highlight};
      color: ${color.fg.surface};
    }
  `}
`

type ButtonProps = Omit<StpgButtonProps, "leftExtra" | "rightExtra"> & {
  leftIcon?: IconProp
  rightIcon?: IconProp
}

export const Button = ({
  leftIcon,
  rightIcon,
  children,
  ...buttonProps
}: React.PropsWithChildren<ButtonProps>) => {
  const leftExtra = leftIcon ? <FontAwesomeIcon icon={leftIcon} /> : undefined

  const rightExtra = rightIcon ? (
    <FontAwesomeIcon icon={rightIcon} />
  ) : undefined

  return (
    <StyledButton
      leftExtra={leftExtra}
      rightExtra={rightExtra}
      {...buttonProps}
    >
      {children}
    </StyledButton>
  )
}
