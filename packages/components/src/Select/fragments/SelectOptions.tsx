import React from "react"

import { Listbox } from "@headlessui/react"

import { SelectProps } from ".."
import { Options } from "../styles"
import { SelectOption } from "./SelectOption"

type OptionsProps = Pick<
  SelectProps,
  "options" | "placeholder" | "onOpen" | "onClose"
> & {
  open: boolean
}

export const SelectOptions = ({
  options,
  placeholder,
  open,
  onOpen,
  onClose,
}: OptionsProps) => {
  React.useEffect(() => {
    if (open) onOpen?.()
    else onClose?.()
  }, [onClose, onOpen, open])

  return (
    <Listbox.Options className={Options}>
      {placeholder && <SelectOption value="" label={placeholder} />}
      {options.map(({ label, value }) => (
        <SelectOption key={value} value={value} label={label} />
      ))}
    </Listbox.Options>
  )
}
