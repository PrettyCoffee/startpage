import React from "react"

import {
  ExtraProps,
  ClassNameProp,
  DisableProp,
  FocusProps,
} from "../fragments/BaseProps"
import { Extra, Knob, Track, Wrapper } from "./styles"

export type SwitchProps = ClassNameProp &
  DisableProp &
  FocusProps &
  ExtraProps & {
    /** Callback fired when the elements value changes */
    onChange?: (value: boolean) => void
    /** Checked state of the switch */
    checked?: boolean
  }

/** A component to switch between two states.
 */
export const Switch = ({
  onChange,
  leftExtra,
  rightExtra,
  checked,
  className = "",
  ...inputProps
}: SwitchProps) => {
  const handleClick = () => onChange?.(!checked)
  return (
    <button
      role="switch"
      aria-checked={checked}
      className={`${className} ${Wrapper}`}
      onClick={handleClick}
      {...inputProps}
    >
      <span className={Extra}>{leftExtra}</span>
      <span className={`${Knob}`} />
      <span className={`${Track}`} />
      <span className={Extra}>{rightExtra}</span>
    </button>
  )
}
