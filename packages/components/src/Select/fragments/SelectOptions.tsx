import React from "react"

import { Listbox } from "@headlessui/react"

import { SelectProps } from ".."
import { Options } from "../styles"

type GetClassesArgs = {
  active: boolean
  selected: boolean
}
const getOptionClasses = ({ active, selected }: GetClassesArgs) => {
  const classes: string[] = []
  if (active) classes.push("active")
  if (selected) classes.push("selected")
  return classes.join(" ")
}

export type Option = {
  value: string
  label?: string
}

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
      {placeholder && (
        <Listbox.Option value={""} className={getOptionClasses}>
          {placeholder}
        </Listbox.Option>
      )}
      {options.map(({ label, value }) => (
        <Listbox.Option key={value} value={value} className={getOptionClasses}>
          {label}
        </Listbox.Option>
      ))}
    </Listbox.Options>
  )
}
