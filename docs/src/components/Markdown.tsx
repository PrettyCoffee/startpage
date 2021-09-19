import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"

const StyledMarkdown = styled(ReactMarkdown)`
  ${({ theme: { color, space, inverted } }) => css`
    @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap");
    a {
      color: ${color.primary.fg};
      font-weight: 600;
    }
    h1 {
      font-size: ${space.largest};
      font-weight: 500;
      color: ${color.fg.base};
    }
    h2 {
      font-size: calc(${space.medium} * 2);
      font-weight: 500;
      color: ${color.fg.base};
      margin-top: ${space.largest};
      border-bottom: 2px solid ${color.bg.surface};
    }
    h3 {
      font-size: ${space.large};
      font-weight: 500;
      color: ${color.fg.base};
    }
    pre {
      background-color: ${inverted ? color.fg.surface : color.bg.shade};
      color: ${inverted ? color.bg.surface : color.fg.shade};
      padding: ${space.large};
      border-radius: ${space.medium};
      box-shadow: 0 4px 0 ${inverted ? color.fg.shade : "#111"};
      * {
        font-family: Fira Code;
        font-weight: 500;
      }
      .hljs-keyword {
        color: ${color.palette.purple};
      }
      .hljs-attr {
        color: ${color.palette.cyan};
      }
      .hljs-class {
        color: ${color.palette.yellow};
      }
      .hljs-string {
        color: ${color.palette.green};
      }
      .hljs-tag {
        color: ${color.palette.red};
      }
    }
  `}
`

type MarkdownProps = {
  children: string
}

export const Markdown = ({ children }: MarkdownProps) => (
  <StyledMarkdown rehypePlugins={[rehypeHighlight]}>{children}</StyledMarkdown>
)
