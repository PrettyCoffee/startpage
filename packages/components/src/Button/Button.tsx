import React from "react"

import { ClassNameProp, DisableProp, ExtraProps } from "../fragments/BaseProps"
import { Extra, Wrapper } from "./styles"

export type ButtonProps = ExtraProps &
  ClassNameProp &
  DisableProp & {
    /** Callback fired when the element is clicked */
    onClick?: () => void
  }

/** A button element.
 */
export const Button = ({
  leftExtra,
  rightExtra,
  className = "",
  children,
  ...buttonProps
}: React.PropsWithChildren<ButtonProps>) => (
  <button className={`${className} ${Wrapper}`} {...buttonProps}>
    {leftExtra && <span className={Extra}>{leftExtra}</span>}
    {children}
    {rightExtra && <span className={Extra}>{rightExtra}</span>}
  </button>
)
