import { readFileSync } from "fs"

import React from "react"

import { PageConfig } from "../PageConfig"

const markdownContent = readFileSync(__dirname + "./intro.md", "utf-8")

export const config: PageConfig = {
  content: markdownContent,
  demo: <></>,
}
