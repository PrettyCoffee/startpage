import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Modal as StpgModal, ModalProps } from "@startpage/components"

const StyledModal = styled(StpgModal)`
  ${({ theme: { color, space } }) => css`
    > .stpg-modal-window {
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
    }
    > .stpg-modal-backdrop {
      z-index: 101;
    }


    .transition {
      transition: 0.5s cubic-bezier(0.75, -0.25, 0.25, 1.25);
    }
    .visible {
      transform: translateX(0);
    }
    .hidden {
      transform: translateX(800px);
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

export const Modal = ({
  open,
  children,
  ...props
}: React.PropsWithChildren<ModalProps>) => {
  
  const enterTransition = {
    transition: "transition",
    from:"hidden",
    to:"visible"
  }

  const leaveTransition = {
    transition: "transition",
    from:"visible",
    to:"hidden"
  }

  return (
    <StyledModal
      open={open}
      enterTransition={enterTransition}
      leaveTransition={leaveTransition}
      backdrop
      {...props}
    >
      <CloseButton onClick={props.onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </CloseButton>
      {children}
    </StyledModal>
  )
}
