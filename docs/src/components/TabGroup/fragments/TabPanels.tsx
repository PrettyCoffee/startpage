import React from "react"

import { Tab } from "@headlessui/react"

import { TabsProp } from "../utils/TabsProp"

export const TabPanels = ({ tabs }: TabsProp) => (
  <Tab.Panels as={React.Fragment}>
    {tabs.map(({ title, children }) => (
      <Tab.Panel key={title}>{children}</Tab.Panel>
    ))}
  </Tab.Panels>
)
