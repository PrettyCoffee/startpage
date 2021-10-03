import React from "react"

import { TextInput } from "@startpage/components"
import { useStorage } from "@startpage/local-storage"
import { RowLayout } from "../../components/RowLayout"

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
