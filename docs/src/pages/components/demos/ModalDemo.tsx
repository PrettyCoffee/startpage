import React from "react"

import { Button, Modal } from "@startpage/components"

import {
  Button as StyledButton,
  Modal as StyledModal,
} from "../../../components"
import { DemoLayout } from "./DemoLayout"

export const ModalDemo = () => {
  const [open, setOpen] = React.useState(false)
  const [styledOpen, setStyledOpen] = React.useState(false)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  const styledOnOpen = () => setStyledOpen(true)
  const styledOnClose = () => setStyledOpen(false)

  const content = (
    <p>
      Push your water glass on the floor drink from the toilet curl up and sleep
      on the freshly laundered towels. Curl up and sleep on the freshly
      laundered towels. Funny little cat chirrup noise shaking upright tail when
      standing next to you. Refuse to leave cardboard box purr purr purr until
      owner pets why owner not pet me hiss scratch meow or head nudges , pet
      right here, no not there, here, no fool, right here that other cat smells
      funny you should really give me all the treats because i smell the best
      and omg you finally got the right spot and i love you right now eat a rug
      and furry furry hairs everywhere oh no human coming lie on counter don't
      get off counter yet swipe at owner's legs. Destroy house in 5 seconds has
      closed eyes but still sees you this human feeds me, i should be a god but
      mouse.
    </p>
  )

  return (
    <DemoLayout>
      <div>
        <Button onClick={onOpen}>Click me!</Button>
        <Modal open={open} onClose={onClose}>
          {content}
          <Button>Agree</Button>
        </Modal>
      </div>
      <div>
        <StyledButton onClick={styledOnOpen}>Click me!</StyledButton>
        <StyledModal open={styledOpen} onClose={styledOnClose}>
          {content}
          <StyledButton>Agree</StyledButton>
        </StyledModal>
      </div>
    </DemoLayout>
  )
}
