import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    position: relative;
    height: ${space.largest};
    width: 15rem;

    display: inline-flex;
    align-items: center;
  `}
`
