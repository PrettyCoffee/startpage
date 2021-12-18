import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Tab } from "@headlessui/react"

import { TabsProp } from "../utils/TabsProp"

const List = styled(Tab.List)`
  ${({ theme: { color, space } }) => css`
    height: ${space.largest};
    width: max-content;
    box-shadow: 0 4px 0 ${color.bg.shade};
    border-radius: ${space.medium};
    margin-bottom: ${space.medium};
    background-color: ${color.bg.surface};
  `}
`

const StyledTab = styled(Tab)`
  ${({ theme: { color, space } }) => css`
    height: ${space.largest};
    padding: 0 ${space.medium};

    cursor: pointer;
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
  `}
`

export const TabList = ({ tabs }: TabsProp) => (
  <List>
    {tabs.map(({ title }) => (
      <StyledTab key={title}>{title}</StyledTab>
    ))}
  </List>
)
