import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faCopy } from "@fortawesome/free-solid-svg-icons"

import { Button } from "../"

const CopyWrapper = styled.div<{ clicked: boolean }>`
  ${({ theme: { color, space, inverted }, clicked }) => css`
    position: absolute;
    right: -0.75rem;
    top: -0.75rem;
    > button.stpg-button {
      background-color: transparent;
      color: ${inverted ? color.bg.highlight : color.fg.surface};
      box-shadow: none;
      :hover {
        background-color: ${inverted ? color.fg.highlight : color.bg.base};
      }
      :focus-visible {
        outline: ${inverted ? color.bg.base : color.fg.shade} solid 2px;
      }
    }
    ${clicked &&
    css`
      ::before {
        content: "Copied!";
        margin-right: ${space.medium};
      }
    `}
  `}
`

export const CopyButton = ({ code }: { code: string }) => {
  const [clicked, setClicked] = React.useState(false)
  const handleClick = () =>
    navigator.clipboard.writeText(code).then(() => setClicked(true))

  return (
    <CopyWrapper clicked={clicked}>
      <Button
        onClick={handleClick}
        leftIcon={faCopy}
        onBlur={() => setClicked(false)}
      />
    </CopyWrapper>
  )
}
