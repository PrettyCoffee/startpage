import "react-app-polyfill/stable"
import React from "react"

import ReactDOM from "react-dom"

import * as Examples from "./examples"

const App = () => (
  <div>
    {Object.values(Examples).map(Example => (
      <Example />
    ))}
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
