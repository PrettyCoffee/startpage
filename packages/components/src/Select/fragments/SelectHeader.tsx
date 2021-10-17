import React from "react"

import { Listbox } from "@headlessui/react"

import { SelectProps } from "../Select"
import { Extra, Text, Header } from "../styles"
import { Arrow } from "./Arrow"

export type SelectHeaderProps = Pick<
  SelectProps,
  "placeholder" | "disabled" | "leftExtra" | "rightExtra" | "onBlur" | "onFocus"
> & {
  label?: string
}

export const SelectHeader = ({
  label,
  placeholder,
  leftExtra,
  rightExtra = <Arrow />,
  ...selectProps
}: SelectHeaderProps) => {
  const placeholderCSS = !label ? "placeholder" : ""

  return (
    <Listbox.Button {...selectProps} className={Header}>
      {leftExtra && <span className={Extra}>{leftExtra}</span>}
      <span className={`${Text} ${placeholderCSS}`}>
        {label || placeholder}
      </span>
      {rightExtra && <span className={Extra}>{rightExtra}</span>}
    </Listbox.Button>
  )
}
