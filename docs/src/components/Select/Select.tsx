import React from "react"

import { Listbox } from "@headlessui/react"

import { SelectHeader, SelectOptions, Wrapper } from "./fragments"
import { Option } from "./fragments/SelectOption"

const getOptionByValue = (options: Option[], value?: string) =>
  options.find(option => option.value === value)

export type SelectProps = {
  options: Option[]
  value?: string
  placeholder?: string
  onChange: (value: string) => void
}

export const Select = ({
  value,
  onChange,
  options,
  placeholder,
}: SelectProps) => {
  const [label, setLabel] = React.useState<string>()

  React.useEffect(() => {
    const currentOption = getOptionByValue(options, value)
    setLabel(currentOption?.label || value)
  }, [options, value])

  if (!label && !placeholder) setLabel(options[0].label)

  return (
    <Wrapper>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <SelectHeader label={label} placeholder={placeholder} open={open} />
            <SelectOptions options={options} />
          </>
        )}
      </Listbox>
    </Wrapper>
  )
}
