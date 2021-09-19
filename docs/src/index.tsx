import React from "react"

import styled from "@emotion/styled"
import { render } from "react-dom"

import { Markdown } from "./components/Markdown"
import { PageLayout } from "./layout/PageLayout"
import * as Examples from "./pages"
import { Providers } from "./Providers"

const Section = styled.section``

const App = () => (
  <Providers>
    <PageLayout>
      {Object.values(Examples).map(config => (
        <Section>
          <Markdown>{config.content || ""}</Markdown>
          {config.demo}
        </Section>
      ))}
    </PageLayout>
  </Providers>
)

render(<App />, document.getElementById("root"))
