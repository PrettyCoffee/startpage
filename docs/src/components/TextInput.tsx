import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  TextInput as StpgTextInput,
  TextInputProps as StpgTextInputProps,
} from "@startpage/components"

const getExtraPadding = ({ leftExtra, rightExtra }: StpgTextInputProps) =>
  css`
    padding-left: ${leftExtra ? "3rem" : "1rem"};
    padding-right: ${rightExtra ? "3rem" : "1rem"};
  `

const StyledTextInput = styled(StpgTextInput)`
  ${({ theme: { color, space }, ...props }) => css`
    position: relative;
    padding: 0;
    gap: 0;
    > .stpg-text-extra {
      position: absolute;
      z-index: 1;
      color: ${color.fg.highlight};
      width: ${space.largest};
      display: flex;
      justify-content: center;
      &.left {
        left: 0;
      }
      &.right {
        right: 0;
      }
    }
    > input {
      background-color: ${color.bg.surface};
      border-radius: ${space.small};
      box-shadow: 0 4px 0 ${color.bg.shade};
      color: ${color.fg.highlight};
      border: none;
      outline: none;
      ::placeholder {
        color: ${color.fg.shade};
      }
      :focus-visible {
        box-shadow: 0 4px 0 ${color.fg.shade};
        outline: ${color.fg.shade} solid 2px;
      }

      ${getExtraPadding(props)}
    }
    :hover > input {
      background-color: ${color.bg.highlight};
    }
  `}
`

type TextInputProps = Pick<
  StpgTextInputProps,
  "value" | "onChange" | "placeholder" | "onKeyPress"
> & {
  leftIcon?: IconProp
  rightIcon?: IconProp
}

export const TextInput = ({
  leftIcon,
  rightIcon,
  ...props
}: TextInputProps) => {
  const leftExtra = leftIcon ? <FontAwesomeIcon icon={leftIcon} /> : undefined

  const rightExtra = rightIcon ? (
    <FontAwesomeIcon icon={rightIcon} />
  ) : undefined

  return (
    <StyledTextInput leftExtra={leftExtra} rightExtra={rightExtra} {...props} />
  )
}
