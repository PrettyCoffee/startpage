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

export type FocusProps<ElementType> = {
  /** Callback fired when the element gains focus */
  onFocus?: React.FocusEventHandler<ElementType>
  /** Callback fired when the element looses focus */
  onBlur?: React.FocusEventHandler<ElementType>
}

export type BaseInputProps<ElementType, ValueType> = ClassNameProp &
  DisableProp &
  FocusProps<ElementType> & {
    /** Callback fired when the elements value changes */
    onChange?: (value: ValueType, event: React.ChangeEvent<ElementType>) => void
  }
