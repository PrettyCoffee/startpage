import React from "react"

import { createStorageContext } from "@startpage/local-storage"

import { RowLayout } from "../../components/RowLayout"
import { TextInput } from "../../components/TextInput"

const { StorageProvider, useStorage } = createStorageContext("context-demo", "")

const Child = () => {
  const [value, setValue] = useStorage()

  return (
    <RowLayout>
      <TextInput
        placeholder="Contexts are great!"
        value={value}
        onChange={setValue}
      />
      Value in local storage: {value}
    </RowLayout>
  )
}

export const Parent = () => (
  <StorageProvider>
    <Child />
  </StorageProvider>
)
