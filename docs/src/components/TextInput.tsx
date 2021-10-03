import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  TextInput as StpgTextInput,
  TextInputProps as StpgTextInputProps,
} from "@startpage/components"

const StyledTextInput = styled(StpgTextInput)`
  ${({ theme: { color, space } }) => css`
    background-color: ${color.bg.surface};
    border-radius: ${space.small};
    box-shadow: 0 4px 0 ${color.bg.shade};
    :hover {
      background-color: ${color.bg.highlight};
    }
    > span {
      padding-left: ${space.medium};
      color: ${color.fg.highlight};
    }
    > input {
      padding: 0 ${space.medium};
      color: ${color.fg.highlight};
      background-color: transparent;
      border: none;
      outline: none;
      ::placeholder {
        color: ${color.fg.shade};
      }
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
