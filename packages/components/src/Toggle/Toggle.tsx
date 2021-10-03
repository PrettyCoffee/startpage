import React from "react"

import { css, cx } from "@emotion/css"

import { BaseInputProps } from "../fragments/BaseProps"

const height = "2rem"
const width = "4rem"

const Extra = cx(
  css`
    height: ${height};
    width: ${height};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  "toggle-extra"
)

const Knob = cx(
  css`
    position: absolute;
    z-index: 1;
    width: calc(${height} - 8px);
    height: calc(${height} - 8px);
    border-radius: 50%;
    transition: 0.5s;
    transform: translateX(-1rem);
    &.active {
      transform: translateX(1rem);
    }
  `,
  "toggle-knob"
)

const Input = css`
  position: absolute;
  z-index: 2;
  cursor: pointer;
  width: 100%;
  height: 100%;
  opacity: 0;
`

const Wrapper = cx(
  css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width};
    height: ${height};
    border-radius: calc(${height} / 2);
  `,
  "toggle"
)

type ToggleProps = BaseInputProps<boolean> & {
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
