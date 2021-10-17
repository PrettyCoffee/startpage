import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Modal as StpgModal, ModalProps } from "@startpage/components"

const StyledModal = styled(StpgModal)`
  ${({ theme: { color, space } }) => css`
    background-color: ${color.bg.base};
    border: 2px solid ${color.fg.shade};
    color: ${color.fg.surface};
    border-radius: ${space.small};
    padding: ${space.large} ${space.largest};
    width: 800px;
    box-sizing: border-box;
    z-index: 102;

    top: 0;
    bottom: 0;
    right: 0;
    left: unset;

    @keyframes slideOut {
      from {
        filter: blur(0);
        transform: translateX(0);
      }
      to {
        filter: blur(8px);
        transform: translateX(800px);
      }
    }

    @keyframes slideIn {
      from {
        filter: blur(8px);
        transform: translateX(800px);
      }
      to {
        filter: blur(0);
        transform: translateX(0);
      }
    }
  `}
`

const CloseButton = styled.button`
  ${({ theme: { color, space } }) => css`
    position: absolute;
    left: 0;
    top: 0;
    background-color: transparent;
    color: ${color.fg.surface};
    width: ${space.largest};
    height: ${space.largest};
    border: none;
    outline: none;
    cursor: pointer;
    font-size: ${space.large};
    transition: 0.3s cubic-bezier(0.7, 4.6, 0.7, 2) 0s;
    :hover,
    :focus-visible {
      transform: rotate(15deg);
    }
  `}
`

const Backdrop = styled.div`
  position: fixed;
  z-index: 101;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Modal = ({
  visible,
  children,
  ...props
}: React.PropsWithChildren<ModalProps>) => {
  const animateIn = `slideIn 0.5s cubic-bezier(0.75, -0.25, 0.25, 1.25) forwards`
  const animateOut = `slideOut 0.5s cubic-bezier(0.75, -0.25, 0.25, 1.25) forwards`

  return (
    <StyledModal
      visible={visible}
      animateIn={animateIn}
      animateOut={animateOut}
      Backdrop={<Backdrop />}
      {...props}
    >
      <CloseButton onClick={props.onBlur}>
        <FontAwesomeIcon icon={faTimes} />
      </CloseButton>
      {children}
    </StyledModal>
  )
}
