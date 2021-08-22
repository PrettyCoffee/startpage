import React from "react"

export type ClassNameProp = {
  /** Pass your own css classes for unique styling. Removes the libraries styling. */
  className?: string
}

export type BaseInputProps<ValueType> = ClassNameProp & {
  /** Current value */
  value?: ValueType
  /** Placeholder which is shown if value is undefined */
  placeholder?: string
  /** Callback fired when the inputs value changes */
  onChange?: (
    value: ValueType,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
  /** Callback fired when a key is pressed while the input is focused */
  onKeyPress?: (
    key: string,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => void
  /** Label text for the input */
  label?: string
  /** Disables the input */
  disabled?: boolean
  /** Indicates focusability and position in keyboard navigation */
  tabIndex?: number
  /** Callback fired when the input gains focus */
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  /** Callback fired when the input looses focus */
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  /** Enables HTML basic autocomplete, pass a boolean for on / off or a string with the (HTML) type of the autocomplete. */
  autocomplete?: boolean | string
}
