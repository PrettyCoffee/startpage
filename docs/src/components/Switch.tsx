import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Switch as StpgSwitch,
  SwitchProps as StpgSwitchProps,
} from "@startpage/components"

const StyledSwitch = styled(StpgSwitch)`
  ${({ theme: { space, color } }) => css`
    outline: none;
    > .stpg-switch-track {
      transition: background-color 0.5s;
      box-shadow: 0 4px 0 ${color.bg.shade};
      border-radius: ${space.medium};
      background-color: ${color.bg.surface};
    }
    &[aria-checked="true"] {
      > .stpg-switch-track {
        background-color: ${color.fg.surface};
      }
      > .stpg-switch-knob {
        background-color: ${color.bg.surface};
      }
    }
    :focus-visible > .stpg-switch-track {
      box-shadow: 0 4px 0 ${color.fg.shade};
      outline: ${color.fg.shade} solid 2px;
    }
    > .stpg-switch-knob {
      transition: 0.5s;
      background-color: ${color.fg.highlight};
      border-radius: 50%;
    }
    > .stpg-switch-extra {
      font-size: 1rem;
      :first-of-type {
        color: ${color.bg.highlight};
      }
      :last-of-type {
        color: ${color.fg.highlight};
      }
    }
  `}
`

type SwitchProps = Omit<StpgSwitchProps, "leftExtra" | "rightExtra"> & {
  leftIcon?: IconProp
  rightIcon?: IconProp
}

export const Switch = ({
  leftIcon,
  rightIcon,
  children,
  ...SwitchProps
}: React.PropsWithChildren<SwitchProps>) => {
  const leftExtra = leftIcon ? <FontAwesomeIcon icon={leftIcon} /> : undefined

  const rightExtra = rightIcon ? (
    <FontAwesomeIcon icon={rightIcon} />
  ) : undefined

  return (
    <StyledSwitch
      leftExtra={leftExtra}
      rightExtra={rightExtra}
      {...SwitchProps}
    >
      {children}
    </StyledSwitch>
  )
}
