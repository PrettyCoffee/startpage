import React from "react"

import { BaseInputProps } from "../../base"
import { defaultStyles } from "./fragments/defaultStyles"

export type TextInputProps = BaseInputProps<string> & {
  /** Current value */
  value?: string
  /** Placeholder which is shown if value is undefined */
  placeholder?: string
  /** Callback fired when a key is pressed while the input is focused */
  onKeyPress?: (
    key: string,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => void
  /** Enables HTML basic autocomplete, pass a boolean for on / off or a string with the (HTML) type of the autocomplete. */
  autocomplete?: boolean | string
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
  className = defaultStyles,
  ...inputProps
}: TextInputProps) => {
  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) =>
    onChange?.(changeEvent.currentTarget.value, changeEvent)

  const handleKeyPress = (keyEvent: React.KeyboardEvent<HTMLInputElement>) =>
    onKeyPress?.(keyEvent.key, keyEvent)

  return (
    <div className={className}>
      {label && <label>{label}</label>}
      {leftExtra && <span className="input-extra">{leftExtra}</span>}
      <input
        type={type}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        {...inputProps}
      />
      {rightExtra && <span className="input-extra">{rightExtra}</span>}
    </div>
  )
}
