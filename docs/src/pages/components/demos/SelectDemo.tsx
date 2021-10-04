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
  const props = {
    value,
    options,
    onChange: setValue,
    placeholder: "Select a value",
  }
  return (
    <DemoLayout>
      <Select {...props} />
      <StyledSelect {...props} />
    </DemoLayout>
  )
}
