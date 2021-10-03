import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const ColumnLayout = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${space.large};
  `}
`
