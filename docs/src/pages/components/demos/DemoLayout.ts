import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { RowLayout } from "../../../components"

export const DemoLayout = styled(RowLayout)`
  ${({ theme: { color, space } }) => css`
    margin: ${space.large} ${space.largest};
    padding-top: ${space.large};
    color: black;
    align-items: flex-start;
    > * {
      position: relative;
      ::before {
        position: absolute;
        top: -${space.large};
        left: 0;
        color: ${color.fg.base};
      }
      :nth-of-type(1)::before {
        content: "Unstyled";
      }
      :nth-of-type(2)::before {
        content: "Styled";
      }
    }
  `}
`
