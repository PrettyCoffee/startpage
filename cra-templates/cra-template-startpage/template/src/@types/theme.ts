import "@startpage/theming"

import { StpgTheme } from "@startpage/preset"

declare module "@startpage/theming" {
  export interface Theme extends StpgTheme {}
}
