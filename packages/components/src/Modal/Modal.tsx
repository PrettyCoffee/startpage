import React from "react"

import { ClassNameProp } from "../fragments/BaseProps"
import { useOutsideClick } from "./fragments/useOutsideClick"
import { Wrapper } from "./styles"

export type ModalProps = ClassNameProp & {
  visible?: boolean
  onBlur?: () => void
}

export const Modal = ({
  onBlur = () => null,
  visible = false,
  className = "",
  children,
}: React.PropsWithChildren<ModalProps>) => {
  const modalRef = React.useRef<HTMLDivElement>(null)

  useOutsideClick(modalRef, visible, onBlur)

  const visibleCSS = visible ? "visible" : ""

  return (
    <div
      ref={modalRef}
      aria-hidden={!visible}
      className={`${Wrapper} ${className} ${visibleCSS}`}
    >
      {children}
    </div>
  )
}
