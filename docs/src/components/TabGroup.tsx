import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { TabGroup as StpgTabGroup } from "@startpage/components"

export const TabGroup = styled(StpgTabGroup)`
  ${({ theme: { color, space } }) => css`
    > .stpg-tabgroup-tablist {
      height: ${space.largest};
      width: max-content;
      box-shadow: 0 4px 0 ${color.bg.shade};
      border-radius: ${space.medium};
      margin-bottom: ${space.medium};
      background-color: ${color.bg.surface};
      > .stpg-tabgroup-tab {
        color: ${color.fg.surface};
        background-color: transparent;
        border: none;
        border-radius: ${space.medium};
        outline: none;
        :hover,
        &[aria-selected="true"] {
          background-color: ${color.bg.highlight};
        }
        :focus-visible {
          outline: 2px solid ${color.fg.shade};
        }
      }
    }
  `}
`
