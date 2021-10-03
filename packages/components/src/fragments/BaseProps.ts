import React from "react"

export type ExtraProps = {
  /** Component which is displayed on the left side */
  leftExtra?: React.ReactFragment
  /** Component which is displayed on the right side */
  rightExtra?: React.ReactFragment
}

export type ClassNameProp = {
  /** Pass your own css classes for unique styling. */
  className?: string
}

export type BaseInputProps<ValueType> = ClassNameProp & {
  /** Callback fired when the elements value changes */
  onChange?: (
    value: ValueType,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
  /** Disables the element */
  disabled?: boolean
  /** Indicates focusability and position in keyboard navigation */
  tabIndex?: number
  /** Callback fired when the element gains focus */
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  /** Callback fired when the element looses focus */
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}
