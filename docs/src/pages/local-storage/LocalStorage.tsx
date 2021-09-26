import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

import {
  useStorage as useLocalStorage,
  TextInput,
  createStorageContext,
} from "../../../../src"

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    align-items: center;
    font-size: ${space.large};
    gap: ${space.large};
  `}
`

export const HookDemo = () => {
  const [text, setText] = useLocalStorage("hook-demo", "")

  return (
    <Wrapper>
      <TextInput
        placeholder="🤖 beep boop, type!"
        value={text}
        onChange={setText}
      />
      Value in local storage: {text}
    </Wrapper>
  )
}

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
