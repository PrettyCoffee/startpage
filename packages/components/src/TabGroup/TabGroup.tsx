import React from "react"

import { Tab } from "@headlessui/react"

import { ClassNameProp } from "../fragments/BaseProps"
import { TabList } from "./fragments/TabList"
import { TabPanels } from "./fragments/TabPanels"
import { Wrapper } from "./styles"
import { TabProps } from "./Tab"
import { getTabs } from "./utils/getTabs"

type TabChild = React.ReactElement<TabProps>
type TabGroupChildren = {
  children: TabChild | TabChild[]
}

export type TabGroupProps = ClassNameProp & {
  /** Callback which is fired when the active tab changes */
  onChange?: (index: number) => void
  /** Set this to true if you display your tabs vertically */
  vertical?: boolean
  /** Tab which will be active on load */
  defaultIndex?: number
}

/** Groups Tab components.
 */
export const TabGroup = ({
  children,
  className = "",
  ...groupProps
}: TabGroupChildren & TabGroupProps) => {
  const tabs = getTabs(children)
  return (
    <div className={`${Wrapper} ${className}`}>
      <Tab.Group {...groupProps}>
        <TabList tabs={tabs} />
        <TabPanels tabs={tabs} />
      </Tab.Group>
    </div>
  )
}
