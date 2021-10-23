import React from "react"

import { Tab } from "@headlessui/react"

import { TabList as listStyles, Tab as tabStyles } from "../styles"
import { TabsProp } from "./TabsProp"

export const TabList = ({ tabs }: TabsProp) => (
  <Tab.List className={listStyles}>
    {tabs.map(({ title }) => (
      <Tab key={title} className={tabStyles}>
        {title}
      </Tab>
    ))}
  </Tab.List>
)
