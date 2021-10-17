import React from "react"

import { Dialog, Transition } from "@headlessui/react"

import { ClassNameProp } from "../fragments/BaseProps"
import { Backdrop, Wrapper, Window } from "./styles"

export type Transition = {
  /** CSS Classname applied during the transition */
  transition: string
  /** CSS Classname applied before triggering the transition */
  from: string
  /** CSS Classname applied to trigger the transition */
  to: string
}

export type ModalProps = ClassNameProp & {
  /** Mounts / unmounts the modal */
  open?: boolean
  /** Optional layer between modal and page content */
  backdrop?: boolean
  /** Callback fired when a closing event is triggered */
  onClose: () => void
  /** Transitioning when modal enters the screen. */
  enterTransition?: Transition
  /** Transitioning when modal leaves the screen. */
  leaveTransition?: Transition
}

export const Modal = ({
  onClose,
  open = false,
  className = "",
  backdrop,
  enterTransition,
  leaveTransition,
  children,
}: React.PropsWithChildren<ModalProps>) => (
  <Transition show={open}>
    <Dialog className={`${Wrapper} ${className}`} onClose={onClose}>
      {backdrop && <Dialog.Overlay className={Backdrop} />}
      <Transition.Child
        enter={enterTransition?.transition}
        enterFrom={enterTransition?.from}
        enterTo={enterTransition?.to}
        leave={leaveTransition?.transition}
        leaveFrom={leaveTransition?.from}
        leaveTo={leaveTransition?.to}
        as={React.Fragment}
      >
        <div className={Window}>{children}</div>
      </Transition.Child>
    </Dialog>
  </Transition>
)
