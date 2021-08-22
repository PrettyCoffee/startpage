import React from "react"

import { BaseInputProps } from "../../base"
import { inputStyles } from "./fragments/inputStyles"

export type TextInputProps = BaseInputProps<string> & {
  /** Input will be focused on load if set to true */
  autofocus?: boolean
  /** Type of the input element, defaults to "text" */
  type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url"
  /** Component which is displayed on the left side of the input element.  */
  leftExtra?: React.ReactFragment
  /** Component which is displayed on the right side of the input element.  */
  rightExtra?: React.ReactFragment
}

/** A text input element.
 */
export const TextInput = ({
  label,
  leftExtra,
  rightExtra,
  onChange,
  onKeyPress,
  type = "text",
  className,
  ...inputProps
}: TextInputProps) => {
  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) =>
    onChange?.(changeEvent.currentTarget.value, changeEvent)

  const handleKeyPress = (keyEvent: React.KeyboardEvent<HTMLInputElement>) =>
    onKeyPress?.(keyEvent.key, keyEvent)

  return (
    <div className={className || inputStyles}>
      {label && <label>{label}</label>}
      {leftExtra && <span>{leftExtra}</span>}
      <input
        type={type}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        {...inputProps}
      />
      {rightExtra && <span>{rightExtra}</span>}
    </div>
  )
}
