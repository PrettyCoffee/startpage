import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { TextInput } from "@startpage/components"
import { useStorage } from "@startpage/local-storage"

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    align-items: center;
    font-size: ${space.large};
    gap: ${space.large};
  `}
`

export const HookDemo = () => {
  const [value, setValue] = useStorage("hook-demo", "")

  return (
    <Wrapper>
      <TextInput
        placeholder="Write into the Storage!"
        value={value}
        onChange={setValue}
      />
      Value in local storage: {value}
    </Wrapper>
  )
}
