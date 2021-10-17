import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Select as StpgSelect,
  SelectProps as StpgSelectProps,
} from "@startpage/components"

const StyledSelect = styled(StpgSelect)<{ open: boolean }>`
  ${({ theme: { color, space }, open }) => css`
    font-size: ${space.medium};
    > .stpg-select-options,
    .stpg-select-header {
      border-radius: ${space.small};
      color: ${color.fg.surface};
      background-color: ${color.bg.surface};
      outline: none;
    }

    > .stpg-select-header {
      border: none;

      box-shadow: 0 4px 0 ${color.bg.shade};
      gap: ${space.medium};
      padding: 0 ${space.medium};
      min-width: 12rem;
      text-align: left;
      > .placeholder {
        color: ${color.fg.shade};
      }
      :hover {
        background-color: ${color.bg.highlight};
      }
      :focus-visible {
        box-shadow: 0 4px 0 ${color.fg.shade};
        outline: ${color.fg.shade} solid 2px;
      }

      ${open &&
      css`
        box-shadow: 0 4px 0 ${color.fg.shade};
        outline: ${color.fg.shade} solid 2px;
        > .stpg-select-extra {
          transform: rotate(180deg);
        }
      `}
    }

    > .stpg-select-options {
      box-shadow: 0 0 ${space.small} ${color.bg.shade};
      top: calc(100% + ${space.small});
      > li {
        padding: ${space.small};
        border-radius: ${space.small};
        &.active {
          background-color: ${color.bg.highlight};
        }
        &.selected {
          color: ${color.primary.fg};
        }
      }
    }
  `}
`

type SelectProps = Omit<StpgSelectProps, "leftExtra" | "rightExtra"> & {
  leftIcon?: IconProp
  rightIcon?: IconProp
}

export const Select = ({
  leftIcon,
  rightIcon = faAngleDown,
  ...props
}: SelectProps) => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const leftExtra = leftIcon ? <FontAwesomeIcon icon={leftIcon} /> : undefined

  const rightExtra = rightIcon ? (
    <FontAwesomeIcon icon={rightIcon} />
  ) : undefined

  return (
    <StyledSelect
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      leftExtra={leftExtra}
      rightExtra={rightExtra}
      {...props}
    />
  )
}
