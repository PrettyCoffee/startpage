import "@emotion/react"

import { Theme as StartpageTheme } from "@startpage/theming"

declare module "@emotion/react" {
  export interface Theme extends StartpageTheme {}
}
