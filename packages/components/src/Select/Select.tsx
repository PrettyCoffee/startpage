import React from "react"

import { ExtraProps, BaseInputProps } from "../fragments/BaseProps"
import { Arrow } from "./fragments/Arrow"
import { Extra, Wrapper, Input, Text, Header } from "./styles"

export type Option = {
  value?: string
  label: string
}

const getOptionByValue = (options: Option[], value?: string) =>
  options.find(option => option.value === value)

export type SelectProps = ExtraProps &
  BaseInputProps<HTMLSelectElement, string> & {
    /** Placeholder if no option is selected. If a placeholder is passed, an empty option will be added. */
    placeholder?: string
    /** Current value of the element */
    value?: string
    /** Will be displayed if set instead of the selected value or placeholder */
    displayValue?: string
    /** Options of the select */
    options: Option[]
  }

/** Element for selecting between several options.
 */
export const Select = ({
  leftExtra,
  rightExtra = <Arrow />,
  displayValue,
  onChange,
  options,
  value,
  placeholder,
  className = "",
  ...selectProps
}: SelectProps) => {
  const [label, setLabel] = React.useState<string>()

  React.useEffect(() => {
    const currentOption = getOptionByValue(options, value)
    setLabel(displayValue || currentOption?.label)
  }, [displayValue, options, value])

  const handleChange = (changeEvent: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(changeEvent.target.value, changeEvent)
  }

  if (!label && !placeholder) setLabel(options[0].label)

  const placeholderCSS = !label ? "placeholder" : ""

  return (
    <div className={`${Wrapper} ${className}`}>
      <select
        className={Input}
        value={value}
        onChange={handleChange}
        {...selectProps}
      >
        {placeholder && <option></option>}
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <div className={`${Header}`}>
        {leftExtra && <span className={Extra}>{leftExtra}</span>}
        <span className={`${Text} ${placeholderCSS}`}>
          {label || placeholder}
        </span>
        {rightExtra && <span className={Extra}>{rightExtra}</span>}
      </div>
    </div>
  )
}
