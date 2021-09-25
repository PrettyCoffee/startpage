import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ExternalIconWrapper = styled.span`
  position: relative;
`
const Icon = styled(FontAwesomeIcon)`
  ${({ theme: { space } }) => css`
    font-size: 1.2rem;
    margin-left: ${space.medium};
  `}
`
const ExternalIcon = styled(FontAwesomeIcon)`
  ${({ theme: { space } }) => css`
    position: absolute;
    font-size: calc(${space.medium} / 2);
    right: calc(-${space.small} / 2);
    bottom: calc(-${space.small} / 2);
  `}
`

type ExternalIconProps = {
  icon: IconProp
}

export const ExternalLinkIcon = (props: ExternalIconProps) => (
  <ExternalIconWrapper>
    <Icon {...props} />
    <ExternalIcon icon={faExternalLinkAlt} />
  </ExternalIconWrapper>
)
