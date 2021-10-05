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

    top: 0;
    bottom: 0;
    left: unset;
    right: -800px;
    display: block;
    transition: 0.5s cubic-bezier(0.75, -0.25, 0.25, 1.25) 0s;
    filter: blur(8px);

    &.visible {
      filter: blur(0);
      transform: translateX(-800px);
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
    :hover {
      transform: rotate(15deg);
    }
  `}
`

export const Modal = ({
  children,
  ...props
}: React.PropsWithChildren<ModalProps>) => (
  <StyledModal {...props}>
    <CloseButton onClick={props.onBlur}>
      <FontAwesomeIcon icon={faTimes} />
    </CloseButton>
    {children}
  </StyledModal>
)
