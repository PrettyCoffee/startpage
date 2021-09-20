import React from "react"

import styled from "@emotion/styled"
import { render } from "react-dom"

import { MDX } from "./components/"
import { PageLayout } from "./layout/PageLayout"
import Pages from "./pages"
import { Providers } from "./Providers"

const Section = styled.section``

const App = () => {
  const [Page, setPage] = React.useState(Pages[0])

  const pageIcons = Pages.map(page => page.icon)

  const changePage = (index: number) => setPage(Pages[index])

  return (
    <Providers>
      <PageLayout pageIcons={pageIcons} changePage={changePage}>
        <Section>
          <MDX>
            <Page.content />
          </MDX>
        </Section>
      </PageLayout>
    </Providers>
  )
}

render(<App />, document.getElementById("root"))
