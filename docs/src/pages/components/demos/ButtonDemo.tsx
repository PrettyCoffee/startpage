import React from "react"

import { faIcons } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@startpage/components"

import { Button as StyledButton } from "../../../components"
import { DemoLayout } from "./DemoLayout"

const Extra = <FontAwesomeIcon icon={faIcons} />

export const ButtonDemo = () => (
  <DemoLayout>
    <Button leftExtra={Extra} rightExtra={Extra}>
      Click me!
    </Button>
    <StyledButton leftIcon={faIcons} rightIcon={faIcons}>
      Click me!
    </StyledButton>
  </DemoLayout>
)
