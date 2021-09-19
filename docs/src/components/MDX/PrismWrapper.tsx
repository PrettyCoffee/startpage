import React from "react"

import Highlight, { defaultProps } from "prism-react-renderer"

import { useTheme } from "../../../../src"
import { getPrismTheme } from "./prism-theme"

export const PrismWrapper = ({ children }: { children: string }) => {
  const [theme] = useTheme()
  return (
    <Highlight
      {...defaultProps}
      theme={getPrismTheme(theme)}
      code={children}
      language="tsx"
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
  )
}
