import React from "react"

import { render } from "react-dom"

import { ColorPreview } from "./ColorPreview/ColorPreview"
import { PageLayout } from "./layout/PageLayout"
import * as Examples from "./pages"
import { Providers } from "./Providers"

const App = () => (
  <Providers>
    <PageLayout>
      <ColorPreview />
      {Object.values(Examples).map(Example => (
        <Example />
      ))}
    </PageLayout>
  </Providers>
)

render(<App />, document.getElementById("root"))
