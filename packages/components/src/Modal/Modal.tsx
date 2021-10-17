import React from "react"

import { ClassNameProp } from "../fragments/BaseProps"
import { useOutsideClick } from "./fragments/useOutsideClick"
import { Wrapper } from "./styles"

export type ModalProps = ClassNameProp & {
  /** Mounts / unmounts the modal */
  visible?: boolean
  /** Optional layer between modal and page content */
  Backdrop?: React.ReactFragment
  /** Callback fired when clicking outside of the modal */
  onBlur?: () => void
  /** Animation fired when modal is mounted */
  animateIn?: string
  /** Animation fired before modal is unmounted */
  animateOut?: string
}

export const Modal = ({
  onBlur = () => null,
  visible = false,
  className = "",
  Backdrop,
  animateIn,
  animateOut,
  ...modalProps
}: React.PropsWithChildren<ModalProps>) => {
  const modalRef = React.useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = React.useState(visible)

  React.useEffect(() => {
    if (visible) setMounted(true)
    if (!visible && !animateOut) setMounted(false)
  }, [visible, animateOut])

  const unmount = () => !visible && setMounted(false)

  useOutsideClick(modalRef, visible, onBlur)

  if (!mounted) return null

  return (
    <>
      {Backdrop}
      <div
        ref={modalRef}
        className={`${Wrapper} ${className}`}
        style={{ animation: visible ? animateIn : animateOut }}
        onAnimationEnd={unmount}
        {...modalProps}
      />
    </>
  )
}
