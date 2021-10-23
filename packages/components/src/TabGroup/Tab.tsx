import React from "react"

export type TabProps = React.PropsWithChildren<{
  /** Button title of the Tab */
  title: string
}>

/** One Tab of a group which allows to switch between contents.
 * Only use Tabs inside of a TabGroup.
 */
export const Tab = (props: TabProps) => <>{props}</>
