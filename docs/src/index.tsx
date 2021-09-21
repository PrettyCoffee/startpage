import React from "react"

import { render } from "react-dom"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"

import { MDX } from "./components/"
import { PageLayout } from "./layout/PageLayout"
import { Pages } from "./pages"
import { Providers } from "./Providers"

const App = () => (
  <Providers>
    <BrowserRouter basename="/react-startpage/#/">
      <PageLayout>
        <Switch>
          {Pages.map(Page => (
            <Route key={Page.route} path={Page.route}>
              <MDX>
                <Page.content />
              </MDX>
            </Route>
          ))}
          <Route path="*">
            <Redirect to={Pages[0].route} />
          </Route>
        </Switch>
      </PageLayout>
    </BrowserRouter>
  </Providers>
)

render(<App />, document.getElementById("root"))
