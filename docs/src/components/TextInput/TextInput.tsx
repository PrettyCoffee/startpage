import React from "react"

import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Input, TextInputIcon, Wrapper } from "./fragments"

type TextInputProps = {
  value: string
  placeholder: string
  onChange: (value: string) => void
  leftIcon?: IconProp
  rightIcon?: IconProp
}

export const TextInput = ({
  leftIcon,
  rightIcon,
  onChange,
  ...props
}: TextInputProps) => {
  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) =>
    onChange?.(changeEvent.currentTarget.value)

  return (
    <Wrapper>
      {leftIcon && (
        <TextInputIcon position="left">
          <FontAwesomeIcon icon={leftIcon} />
        </TextInputIcon>
      )}
      <Input
        type="text"
        hasLeftIcon={Boolean(leftIcon)}
        hasRightIcon={Boolean(rightIcon)}
        onChange={handleChange}
        {...props}
      />
      {rightIcon && (
        <TextInputIcon position="right">
          <FontAwesomeIcon icon={rightIcon} />
        </TextInputIcon>
      )}
    </Wrapper>
  )
}
