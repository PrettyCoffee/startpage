import React from "react"

import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { performSearch } from "@startpage/search"

import { Button, TextInput } from "../../components"
import { ColumnLayout } from "../../components/ColumnLayout"
import { RowLayout } from "../../components/RowLayout"

const settings = {
  newTab: true,
  directLink: true,
  forwardingLookup: {
    "absolute bangers":
      "https://www.youtube.com/watch?v=1tp66ufvkhQ&list=PL0YDkBQVcBrrTJfTApkmx3L_19QNS4nC8",
  },
}

export const SearchDemo = () => {
  const [value, setValue] = React.useState("")

  const setDirectLink = () =>
    setValue("https://www.youtube.com/watch?v=dQw4w9WgXcQ")

  const setLookupValue = () => setValue("absolute bangers")

  const search = () => performSearch(value, "duckduckgo", settings)

  return (
    <ColumnLayout>
      <RowLayout>
        <TextInput
          value={value}
          placeholder="Search the web"
          onChange={setValue}
          onKeyPress={(key: string) => key === "Enter" && search()}
        />
        <Button onClick={search}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </RowLayout>
      <RowLayout>
        <Button onClick={setDirectLink}>Use a direct link</Button>
        <Button onClick={setLookupValue}>Use a forwarding lookup</Button>
      </RowLayout>
    </ColumnLayout>
  )
}
