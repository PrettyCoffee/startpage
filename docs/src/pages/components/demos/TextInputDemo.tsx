import React from "react"

import { faIcons } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TextInput } from "@startpage/components"

import { TextInput as StyledTextInput } from "../../../components"
import { DemoLayout } from "./DemoLayout"

const Extra = <FontAwesomeIcon icon={faIcons} />

export const TextInputDemo = () => {
  const [value, setValue] = React.useState("")
  const switchProps = {
    value,
    onChange: setValue,
    placeholder: "Placeholder"
  }
  return (
    <DemoLayout>
      <TextInput leftExtra={Extra} rightExtra={Extra} {...switchProps} />
      <StyledTextInput leftIcon={faIcons} rightIcon={faIcons} {...switchProps} />
    </DemoLayout>
  )
}
