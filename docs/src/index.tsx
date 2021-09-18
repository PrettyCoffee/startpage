import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { render } from "react-dom"

import { PageLayout } from "./layout/PageLayout"
import * as Examples from "./pages"
import { Providers } from "./Providers"

const Headline = styled.h1`
  ${({ theme: { color, space } }) => css`
    font-size: ${space.largest};
    font-weight: 500;
    color: ${color.fg.base};
  `}
`

const SubHeadline = styled.h2`
  ${({ theme: { color, space } }) => css`
    font-size: calc(${space.medium} * 2);
    font-weight: 500;
    color: ${color.fg.base};
    margin-top: 0;
  `}
`

const Section = styled.section`
  ${({ theme: { space } }) => css`
    margin-bottom: ${space.largest};
  `}
`

const App = () => (
  <Providers>
    <PageLayout>
      <Headline>react-startpage</Headline>
      {Object.values(Examples).map(example => (
        <Section>
          <SubHeadline>{example.headline}</SubHeadline>
          {example.content}
        </Section>
      ))}
    </PageLayout>
  </Providers>
)

render(<App />, document.getElementById("root"))
