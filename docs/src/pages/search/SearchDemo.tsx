import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { performSearch } from "@startpage/search"

import { Button } from "../../components"

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    align-items: center;
    gap: ${space.large};
  `}
`

const settings = {
  newTab: true,
  directLink: true,
  forwardingLookup: {
    "absolute bangers": "https://www.youtube.com/watch?v=1tp66ufvkhQ&list=PL0YDkBQVcBrrTJfTApkmx3L_19QNS4nC8"
  }
}

export const SearchDemo = () => {
  const defaultSearch = () =>
    performSearch("cute cats", "duckduckgo", settings)
  
  const directLinkSearch = () =>
    performSearch("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "duckduckgo", settings)
  
  const forwardedSearch = () => performSearch("absolute bangers", "duckduckgo", settings)  

  return <Wrapper>
    <Button onClick={defaultSearch}>Search for something</Button>
    <Button onClick={directLinkSearch}>Open a link directly</Button>
    <Button onClick={forwardedSearch}>Use a forwarding lookup</Button>
  </Wrapper>
}
