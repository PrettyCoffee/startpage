import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {
  faCubes,
  faDatabase,
  faHome,
  faPaintBrush,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons"

import Intro from "./intro"
import LocalStorage from "./local-storage"
import Theming from "./theming"
import Components from "./ui-components"
import utilities from "./utilities"

type PageConfig = {
  route: string
  title: string
  icon: IconProp
  content: React.FC
}

export const Pages: PageConfig[] = [
  { route: "/start", title: "react-startpage", content: Intro, icon: faHome },
  { route: "/theming", title: "Theming", content: Theming, icon: faPaintBrush },
  {
    route: "/local-storage",
    title: "Local storage",
    content: LocalStorage,
    icon: faDatabase,
  },
  {
    route: "/utilities",
    title: "Utilities",
    content: utilities,
    icon: faToolbox,
  },
  {
    route: "/components",
    title: "Components",
    content: Components,
    icon: faCubes,
  },
]
