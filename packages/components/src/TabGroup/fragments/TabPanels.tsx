import React from "react"

import { Tab } from "@headlessui/react"

import { Panel } from "../styles"
import { TabsProp } from "./TabsProp"

export const TabPanels = ({ tabs }: TabsProp) => (
  <Tab.Panels as={React.Fragment}>
    {tabs.map(({ title, children }) => (
      <Tab.Panel key={title} className={Panel}>
        {children}
      </Tab.Panel>
    ))}
  </Tab.Panels>
)
