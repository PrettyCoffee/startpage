import React from "react"

import { Button, Modal } from "@startpage/components"

import {
  Button as StyledButton,
  Modal as StyledModal,
} from "../../../components"
import { DemoLayout } from "./DemoLayout"

export const ModalDemo = () => {
  const [visible, setVisible] = React.useState(false)
  const [styledVisible, setStyledVisible] = React.useState(false)

  const open = () => setVisible(true)
  const onBlur = () => setVisible(false)

  const styledOpen = () => setStyledVisible(true)
  const styledOnBlur = () => setStyledVisible(false)

  const content = (
    <p>
      Push your water glass on the floor drink from the toilet curl up and
      sleep on the freshly laundered towels. Curl up and sleep on the freshly
      laundered towels. Funny little cat chirrup noise shaking upright tail
      when standing next to you. Refuse to leave cardboard box purr purr purr
      until owner pets why owner not pet me hiss scratch meow or head nudges ,
      pet right here, no not there, here, no fool, right here that other cat
      smells funny you should really give me all the treats because i smell
      the best and omg you finally got the right spot and i love you right now
      eat a rug and furry furry hairs everywhere oh no human coming lie on
      counter don't get off counter yet swipe at owner's legs. Destroy house
      in 5 seconds has closed eyes but still sees you this human feeds me, i
      should be a god but mouse.
    </p>
  )

  return (
    <DemoLayout>
      <div>
        <Modal visible={visible} onBlur={onBlur}>
          {content}
          <Button>Agree</Button>
        </Modal>
        <Button onClick={open}>
          Click me!
        </Button>
      </div>
      <div>
        <StyledModal visible={styledVisible} onBlur={styledOnBlur}>
          {content}
          <StyledButton>Agree</StyledButton>
        </StyledModal>
        <StyledButton onClick={styledOpen}>Click me!</StyledButton>
      </div>
    </DemoLayout>
  )
}
