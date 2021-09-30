import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { TextInput } from "@startpage/components"
import { createStorageContext } from "@startpage/local-storage"

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    align-items: center;
    font-size: ${space.large};
    gap: ${space.large};
  `}
`

const { StorageProvider, useStorage } = createStorageContext("context-demo", "")

const Child = () => {
  const [value, setValue] = useStorage()

  return (
    <Wrapper>
      <TextInput
        placeholder="Contexts are great!"
        value={value}
        onChange={setValue}
      />
      Value in local storage: {value}
    </Wrapper>
  )
}

export const Parent = () => (
  <StorageProvider>
    <Child />
  </StorageProvider>
)
