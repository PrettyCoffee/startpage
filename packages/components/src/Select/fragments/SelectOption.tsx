import React from "react"

import { Listbox } from "@headlessui/react"

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

export const SelectOption = ({ value, label }: Option) => (
  <Listbox.Option value={value} className={getOptionClasses}>
    {label}
  </Listbox.Option>
)
