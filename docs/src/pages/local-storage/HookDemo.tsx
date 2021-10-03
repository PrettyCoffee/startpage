import React from "react"

import { useStorage } from "@startpage/local-storage"

import { RowLayout } from "../../components/RowLayout"
import { TextInput } from "../../components/TextInput"

export const HookDemo = () => {
  const [value, setValue] = useStorage("hook-demo", "")

  return (
    <RowLayout>
      <TextInput
        placeholder="Write into the Storage!"
        value={value}
        onChange={setValue}
      />
      Value in local storage: {value}
    </RowLayout>
  )
}
