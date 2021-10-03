import React from "react"

import { performSearch } from "@startpage/search"

import { Button } from "../../components"
import { RowLayout } from "../../components/RowLayout"

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

  return <RowLayout>
    <Button onClick={defaultSearch}>Search for something</Button>
    <Button onClick={directLinkSearch}>Open a link directly</Button>
    <Button onClick={forwardedSearch}>Use a forwarding lookup</Button>
  </RowLayout>
}
