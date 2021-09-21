import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {
  faCubes,
  faDatabase,
  faHome,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons"

import Intro from "./intro"
// @ts-ignore
import LocalStorage from "./local-storage"
// @ts-ignore
import Theming from "./theming"
// @ts-ignore
import Components from "./ui-components"

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
    route: "/components",
    title: "Components",
    content: Components,
    icon: faCubes,
  },
]
