import React from "react"

import { Listbox } from "@headlessui/react"

import { ExtraProps, BaseInputProps } from "../fragments/BaseProps"
import { SelectHeader } from "./fragments/SelectHeader"
import { SelectOptions, Option } from "./fragments/SelectOptions"
import { Wrapper } from "./styles"

const getOptionByValue = (options: Option[], value?: string) =>
  options.find(option => option.value === value)

export type SelectProps = ExtraProps &
  BaseInputProps<string> & {
    /** Placeholder if no option is selected. If a placeholder is passed, an empty option will be added. */
    placeholder?: string
    /** Current value of the element */
    value?: string
    /** Options of the select */
    options: Option[]
    /** Callback fired when the content is expanded */
    onOpen?: () => void
    /** Callback fired when the content is collapsed */
    onClose?: () => void
  }

/** Element for selecting between several options.
 */
export const Select = ({
  onChange,
  options,
  placeholder,
  value = "",
  className = "",
  onOpen,
  onClose,
  disabled,
  ...headerProps
}: SelectProps) => {
  const [label, setLabel] = React.useState<string>()

  React.useEffect(() => {
    const currentOption = getOptionByValue(options, value)
    setLabel(currentOption?.label || value)
  }, [options, value])

  if (!label && !placeholder) setLabel(options[0].label)

  return (
    <div className={`${Wrapper} ${className}`}>
      <Listbox value={value} onChange={onChange} disabled={disabled}>
        {({ open }) => (
          <>
            <SelectHeader
              label={label}
              placeholder={placeholder}
              {...headerProps}
            />
            <SelectOptions
              options={options}
              placeholder={placeholder}
              open={open}
              onOpen={onOpen}
              onClose={onClose}
            />
          </>
        )}
      </Listbox>
    </div>
  )
}
