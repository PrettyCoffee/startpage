import React from "react"

import { ClassNameProp, DisableProp, ExtraProps } from "../fragments/BaseProps"
import { Extra, Wrapper } from "./styles"

export type ButtonProps = ExtraProps &
  ClassNameProp &
  DisableProp & {
    /** Callback fired when the element is clicked */
    onClick?: () => void
    /** Applies an active css class */
    active?: boolean
  }

/** A button element.
 */
export const Button = ({
  leftExtra,
  rightExtra,
  className = "",
  children,
  active,
  ...buttonProps
}: React.PropsWithChildren<ButtonProps>) => {
  const activeCSS = active ? "active" : ""
  return (
    <button className={`${className} ${Wrapper} ${activeCSS}`} {...buttonProps}>
      {leftExtra && <span className={Extra}>{leftExtra}</span>}
      {children}
      {rightExtra && <span className={Extra}>{rightExtra}</span>}
    </button>
  )
}
