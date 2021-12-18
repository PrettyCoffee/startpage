import React from "react"

export type TabProps = React.PropsWithChildren<{
  title: string
}>

export const Tab = (props: TabProps) => <>{props}</>
