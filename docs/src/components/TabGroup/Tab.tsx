import React from "react"

export type TabProps = React.PropsWithChildren<{
  // eslint-disable-next-line react/no-unused-prop-types
  title: string
}>

export const Tab = (props: TabProps) => <>{props}</>
