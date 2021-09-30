import React from "react"

export type ClassNameProp = {
  /** Pass your own css classes for unique styling. Removes the libraries styling. */
  className?: string
}

export type BaseInputProps<ValueType> = ClassNameProp & {
  /** Callback fired when the elements value changes */
  onChange?: (
    value: ValueType,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
  /** Label text for the element */
  label?: string
  /** Disables the element */
  disabled?: boolean
  /** Indicates focusability and position in keyboard navigation */
  tabIndex?: number
  /** Callback fired when the element gains focus */
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  /** Callback fired when the element looses focus */
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}
