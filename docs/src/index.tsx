import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { render } from "react-dom"

import { ColorPreview } from "./ColorPreview/ColorPreview"
import { PageLayout } from "./layout/PageLayout"
import * as Examples from "./pages"
import { Providers } from "./Providers"

const Headline = styled.h1`
  ${({ theme: { color, space } }) => css`
    font-size: ${space.largest};
    color: ${color.fg.base};
  `}
`

const App = () => (
  <Providers>
    <PageLayout>
      <Headline>react-startpage</Headline>
      <ColorPreview />
      {Object.values(Examples).map(Example => (
        <Example />
      ))}
    </PageLayout>
  </Providers>
)

render(<App />, document.getElementById("root"))
