import React from "react"

import { BaseInputProps } from "../fragments/BaseProps"
import { Extra, Input, Knob, Wrapper } from "./styles"

export type ToggleProps = BaseInputProps<boolean> & {
  /** Component which is displayed in the left corner of the toggle  */
  leftExtra?: React.ReactFragment
  /** Component which is displayed in the right corner of the toggle  */
  rightExtra?: React.ReactFragment
  /** Checked state of the toggle */
  checked: boolean
}

/** A checkbox with the toggle type of style.
 */
export const Toggle = ({
  onChange,
  leftExtra,
  rightExtra,
  checked,
  className = "",
  ...inputProps
}: ToggleProps) => {
  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(!checked, changeEvent)
  }
  const checkedCSS = checked ? "active" : ""
  return (
    <div className={`${className} ${Wrapper} ${checkedCSS}`}>
      <span className={Extra}>{leftExtra}</span>
      <span className={`${Knob} ${checkedCSS}`} />
      <span className={Extra}>{rightExtra}</span>
      <input
        type="checkbox"
        className={Input}
        checked={checked}
        onChange={handleChange}
        {...inputProps}
      />
    </div>
  )
}
