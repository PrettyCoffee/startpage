import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {
  faBookmark,
  faCubes,
  faDatabase,
  faPaintBrush,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"

import Bookmarks from "./bookmarks"
import Components from "./components"
import Intro from "./intro"
import LocalStorage from "./local-storage"
import Search from "./search"
import Theming from "./theming"

type PageConfig = {
  route: string
  title: string
  icon?: IconProp
  content: React.FC
}

const PackagePages: PageConfig[] = [
  {
    route: "/bookmarks",
    title: "bookmarks",
    content: Bookmarks,
    icon: faBookmark,
  },
  {
    route: "/components",
    title: "components",
    content: Components,
    icon: faCubes,
  },
  {
    route: "/local-storage",
    title: "local-storage",
    content: LocalStorage,
    icon: faDatabase,
  },
  {
    route: "/search",
    title: "search",
    content: Search,
    icon: faSearch,
  },
  { route: "/theming", title: "theming", content: Theming, icon: faPaintBrush },
]

export const Pages: PageConfig[] = [
  { route: "/start", title: "@startpage", content: Intro },
  ...PackagePages.sort((a, b) => (a.route < b.route ? -1 : 1)),
]
