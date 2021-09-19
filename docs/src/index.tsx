import React from "react"

import styled from "@emotion/styled"
import { render } from "react-dom"

import { MDX } from "./components/"
import { PageLayout } from "./layout/PageLayout"
import Pages from "./pages"
import { Providers } from "./Providers"

const Section = styled.section``

const App = () => (
  <Providers>
    <PageLayout>
      {Pages.map((Page, index) => (
        <Section key={index}>
          <MDX>
            <Page />
          </MDX>
        </Section>
      ))}
    </PageLayout>
  </Providers>
)

render(<App />, document.getElementById("root"))
