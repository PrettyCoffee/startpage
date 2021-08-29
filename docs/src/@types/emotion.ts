import "@emotion/react"

import { Theme as StartpageTheme } from "../../../src"

declare module "@emotion/react" {
  export interface Theme extends StartpageTheme {}
}
