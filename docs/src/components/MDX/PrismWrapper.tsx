import React from "react"

import styled from "@emotion/styled"
import { useTheme } from "@startpage/theming"
import Highlight, { defaultProps } from "prism-react-renderer"

import { CopyButton } from "./CopyButton"
import { getPrismTheme } from "./prism-theme"

type Props = { children: string; className?: string }

const CodeWrapper = styled.div`
  position: relative;
`

export const PrismWrapper = ({ className, children }: Props) => {
  const [theme] = useTheme()
  const language = className?.replace("language-", "") as "scss"
  return (
    <CodeWrapper>
      <CopyButton code={children} />
      <Highlight
        {...defaultProps}
        theme={getPrismTheme(theme)}
        code={children}
        language={language || "tsx"}
      >
        {({ tokens, getLineProps, getTokenProps }) =>
          tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))
        }
      </Highlight>
    </CodeWrapper>
  )
}
