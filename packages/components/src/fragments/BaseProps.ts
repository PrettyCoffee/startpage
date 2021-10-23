import React from "react"

export type ClassNameProp = {
  /** Pass your own css classes for unique styling. */
  className?: string
}

export type DisableProp = {
  /** Disables the element */
  disabled?: boolean
}

export type ExtraProps = {
  /** Component which is displayed on the left side */
  leftExtra?: React.ReactFragment
  /** Component which is displayed on the right side */
  rightExtra?: React.ReactFragment
}

export type FocusProps = {
  /** Callback fired when the element gains focus */
  onFocus?: () => void
  /** Callback fired when the element loses focus */
  onBlur?: () => void
}

export type BaseInputProps<ValueType> = ClassNameProp &
  DisableProp &
  FocusProps & {
    /** Callback fired when the elements value changes */
    onChange: (value: ValueType) => void
  }
