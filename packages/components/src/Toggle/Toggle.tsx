import React from "react"

import { BaseInputProps, ExtraProps } from "../fragments/BaseProps"
import { Extra, Input, Knob, Wrapper } from "./styles"

export type ToggleProps = BaseInputProps<boolean> &
  ExtraProps & {
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
  const checkedCSS = checked ? "checked" : ""
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
