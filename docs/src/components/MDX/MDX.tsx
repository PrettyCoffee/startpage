import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { MDXProvider } from "@mdx-js/react"

import { PrismWrapper } from "./PrismWrapper"

const pre = styled.pre`
  ${({ theme: { color, space, inverted } }) => css`
    background-color: ${inverted ? color.fg.surface : color.bg.shade};
    color: ${inverted ? color.bg.surface : color.fg.shade};
    padding: ${space.large};
    padding-bottom: 3px;
    border-radius: ${space.medium};
    box-shadow: 0 4px 0 ${inverted ? color.fg.shade : "#111"};
    * {
      font-family: Fira Code;
      font-weight: 500;
    }
  `}
`

const h1 = styled.h1`
  ${({ theme: { color, space } }) => css`
    font-size: ${space.largest};
    font-weight: 500;
    color: ${color.fg.base};
  `}
`

const h2 = styled.h2`
  ${({ theme: { color, space } }) => css`
    font-size: calc(${space.medium} * 2);
    font-weight: 500;
    color: ${color.fg.base};
    margin-top: ${space.largest};
    border-bottom: 2px solid ${color.bg.surface};
  `}
`

const h3 = styled.h3`
  ${({ theme: { color, space } }) => css`
    font-size: ${space.large};
    font-weight: 500;
    color: ${color.fg.base};
  `}
`

const a = styled.a`
  ${({ theme: { color } }) => css`
    font-weight: 700;
    color: ${color.primary.fg};
    :hover {
      color: ${color.primary.base};
    }
  `}
`

const inlineCode = styled.code`
  ${({ theme: { color, space } }) => css`
    font-family: Fira Code;
    font-weight: 500;
    color: ${color.fg.surface};
    background-color: ${color.bg.shade};
    padding: 0 ${space.small};
    border-radius: ${space.small};
  `}
`

const blockquote = styled.blockquote`
  ${({ theme: { color, space } }) => css`
    font-style: italic;
    color: ${color.fg.surface};
    background-color: ${color.bg.surface};
    padding: ${space.small};
    border-left: 4px solid ${color.bg.shade};
    > p {
      margin: 0;
    }
  `}
`

const table = styled.table`
  ${({ theme: { color, space } }) => css`
    border-collapse: collapse;
    th,
    td {
      text-align: left;
      border-bottom: 2px solid ${color.bg.shade};
      padding: ${space.small} ${space.medium};
    }
    th {
      background-color: ${color.bg.surface};
      color: ${color.fg.surface};
      font-weight: 700;
    }
  `}
`

const strong = styled.strong`
  font-weight: 700;
`

const components = {
  h1,
  h2,
  h3,
  a,
  pre,
  strong,
  table,
  inlineCode,
  blockquote,
  code: PrismWrapper,
}

export const MDX = ({ children }: React.PropsWithChildren<unknown>) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
