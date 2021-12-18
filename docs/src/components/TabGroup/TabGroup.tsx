import React from "react"

import { Tab } from "@headlessui/react"

import { TabList } from "./fragments/TabList"
import { TabPanels } from "./fragments/TabPanels"
import { TabProps } from "./Tab"
import { getTabs } from "./utils/getTabs"

type TabChild = React.ReactElement<TabProps>
type TabGroupChildren = {
  children: TabChild | TabChild[]
}

export type TabGroupProps = {
  onChange?: (index: number) => void
  defaultIndex?: number
}

export const TabGroup = ({
  children,
  ...groupProps
}: TabGroupChildren & TabGroupProps) => {
  const tabs = getTabs(children)
  return (
    <div>
      <Tab.Group {...groupProps}>
        <TabList tabs={tabs} />
        <TabPanels tabs={tabs} />
      </Tab.Group>
    </div>
  )
}
