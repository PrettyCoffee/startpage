import React from "react"

import { faIcons } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Switch } from "@startpage/components"

import { Switch as StyledSwitch } from "../../../components"
import { DemoLayout } from "./DemoLayout"

const Extra = <FontAwesomeIcon icon={faIcons} />

export const SwitchDemo = () => {
  const [checked, setChecked] = React.useState(false)
  const switchProps = {
    checked,
    onChange: setChecked,
  }
  return (
    <DemoLayout>
      <Switch leftExtra={Extra} rightExtra={Extra} {...switchProps} />
      <StyledSwitch leftIcon={faIcons} rightIcon={faIcons} {...switchProps} />
    </DemoLayout>
  )
}
