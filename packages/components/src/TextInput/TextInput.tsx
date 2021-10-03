import React from "react"

import { BaseInputProps, ExtraProps } from "../fragments/BaseProps"
import { Extra, Input, Wrapper } from "./styles"

export type TextInputProps = BaseInputProps<HTMLInputElement, string> &
  ExtraProps & {
    /** Current value of the element */
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
    autoFocus?: boolean
    /** Type of the input element, defaults to "text" */
    type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url"
  }

/** A text input element.
 */
export const TextInput = ({
  leftExtra,
  rightExtra,
  onChange,
  onKeyPress,
  type = "text",
  className = "",
  ...inputProps
}: TextInputProps) => {
  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) =>
    onChange?.(changeEvent.currentTarget.value, changeEvent)

  const handleKeyPress = (keyEvent: React.KeyboardEvent<HTMLInputElement>) =>
    onKeyPress?.(keyEvent.key, keyEvent)

  return (
    <div className={`${Wrapper} ${className}`}>
      {leftExtra && <span className={Extra}>{leftExtra}</span>}
      <input
        type={type}
        className={Input}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        {...inputProps}
      />
      {rightExtra && <span className={Extra}>{rightExtra}</span>}
    </div>
  )
}
