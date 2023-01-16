import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Listbox } from "@headlessui/react"

import { SelectProps } from "../Select"

type HeaderButtonProps = Pick<SelectHeaderProps, "open">

const HeaderButton = styled(Listbox.Button)<
  React.PropsWithChildren<HeaderButtonProps>
>`
  ${({ theme: { space, color }, open }) => css`
    height: ${space.largest};
    gap: ${space.medium};
    padding: 0 ${space.medium};
    min-width: 12rem;

    display: inline-flex;
    align-items: center;

    cursor: pointer;
    box-shadow: 0 4px 0 ${color.bg.shade};
    border-radius: ${space.small};
    color: ${color.fg.surface};
    background-color: ${color.bg.surface};
    border: none;
    outline: none;

    :hover {
      background-color: ${color.bg.highlight};
    }
    :focus-visible {
      box-shadow: 0 4px 0 ${color.fg.shade};
      outline: ${color.fg.shade} solid 2px;
    }
    ${open &&
    css`
      box-shadow: 0 4px 0 ${color.fg.shade};
      outline: ${color.fg.shade} solid 2px;
    `}
  `}
`

const HeaderText = styled.span<Pick<SelectHeaderProps, "placeholder">>`
  ${({ theme: { color, space }, placeholder }) => css`
    font-size: ${space.medium};
    flex: 1;
    text-align: left;

    ${Boolean(placeholder) &&
    css`
      color: ${color.fg.shade};
    `}
  `}
`

export type SelectHeaderProps = Pick<SelectProps, "placeholder"> & {
  label?: string
  open: boolean
}

export const SelectHeader = ({
  label,
  placeholder,
  open,
}: SelectHeaderProps) => (
  <HeaderButton open={open}>
    <HeaderText placeholder={placeholder}>{label || placeholder}</HeaderText>
    <span>
      <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} />
    </span>
  </HeaderButton>
)
