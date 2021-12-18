import { Children } from "react"

import { TabProps } from "../Tab"

type TabChild = React.ReactElement<TabProps>

type TabChildren = TabChild | TabChild[]

export const getTabs = (children: TabChildren) =>
  Children.map(children, tab => tab.props)
