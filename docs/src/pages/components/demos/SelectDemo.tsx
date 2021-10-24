import React from "react"

import { Option, Select } from "@startpage/components"

import { Select as StyledSelect } from "../../../components"
import { DemoLayout } from "./DemoLayout"

const options: Option[] = [
  {
    value: "test1",
    label: "Test 1",
  },
  {
    value: "test2",
    label: "Test 2",
  },
  {
    value: "test3",
    label: "Test 3",
  },
]

export const SelectDemo = () => {
  const [value, setValue] = React.useState<string>()

  const handleOpen = () => console.log("open!")
  const handleClose = () => console.log("close!")
  const handleChange = (value: string) => {
    setValue(value)
    console.log("value change!")
  }

  const props = {
    value,
    options,
    onOpen: handleOpen,
    onClose: handleClose,
    onChange: handleChange,
    placeholder: "Select a value",
  }
  return (
    <DemoLayout>
      <Select {...props} />
      <StyledSelect {...props} />
    </DemoLayout>
  )
}
