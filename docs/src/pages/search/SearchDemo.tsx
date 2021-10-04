import React from "react"

import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Option } from "@startpage/components"
import { performSearch, SearchEngineName } from "@startpage/search"

import {
  Button,
  TextInput,
  ColumnLayout,
  RowLayout,
  Select,
} from "../../components"

const settings = {
  newTab: true,
  directLink: true,
  forwardingLookup: {
    "absolute bangers":
      "https://www.youtube.com/watch?v=1tp66ufvkhQ&list=PL0YDkBQVcBrrTJfTApkmx3L_19QNS4nC8",
  },
}

const searchEngines: Option[] = [
  { label: "deepl", value: "deepl" },
  { label: "duckduckgo", value: "duckduckgo" },
  { label: "ecosia", value: "ecosia" },
  { label: "google", value: "google" },
  { label: "startpage", value: "startpage" },
  { label: "youtube", value: "youtube" },
]

export const SearchDemo = () => {
  const [value, setValue] = React.useState("")
  const [engine, setEngine] = React.useState("duckduckgo")

  const setDirectLink = () =>
    setValue("https://www.youtube.com/watch?v=dQw4w9WgXcQ")

  const setLookupValue = () => setValue("absolute bangers")

  const search = () =>
    performSearch(value, engine as SearchEngineName, settings)

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
        <Select options={searchEngines} value={engine} onChange={setEngine} />
        <Button onClick={setDirectLink}>Use a direct link</Button>
        <Button onClick={setLookupValue}>Use a forwarding lookup</Button>
      </RowLayout>
    </ColumnLayout>
  )
}
