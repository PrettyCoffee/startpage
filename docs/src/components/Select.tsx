import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Select as StpgSelect,
  SelectProps as StpgSelectProps,
} from "@startpage/components"

const StyledSelect = styled(StpgSelect)`
  ${({ theme: { color, space } }) => css`
    border-radius: ${space.small};
    box-shadow: 0 4px 0 ${color.bg.shade};
    gap: ${space.medium};
    padding: 0 ${space.medium};
    color: ${color.fg.surface};
    background-color: ${color.bg.surface};
    > .placeholder {
      color: ${color.fg.shade};
    }
    > .select-input {
      padding: 0 ${space.medium};
      border: none;
      outline: none;
      > option {
        font-family: inherit;
        color: ${color.fg.surface};
        background-color: ${color.bg.surface};
      }
    }
    :hover {
      background-color: ${color.bg.highlight};
    }
  `}
`

type SelectProps = Omit<StpgSelectProps, "leftExtra" | "rightExtra"> & {
  leftIcon?: IconProp
  rightIcon?: IconProp
}

export const Select = ({ leftIcon, rightIcon, ...props }: SelectProps) => {
  const leftExtra = leftIcon ? <FontAwesomeIcon icon={leftIcon} /> : undefined

  const rightExtra = rightIcon ? (
    <FontAwesomeIcon icon={rightIcon} />
  ) : undefined

  return (
    <StyledSelect leftExtra={leftExtra} rightExtra={rightExtra} {...props} />
  )
}
