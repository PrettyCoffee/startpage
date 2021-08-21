import React from "react"

import { useLocalStorage } from ".."
import { StringHistoryContext } from "./StringHistoryContext"

export type StringHistoryProviderProps = {
  /** Initial value which will be used if the local storage entry "history" is empty */
  initialValue?: string[]
  /** Maximum number of saved entries, defaults to 50 */
  maxEntries?: number
}

/** Provider for a string history which is persisted in the local storage by using the access key "history".
 * The history can be accessed by using the `useStringHistory` hook.
 */
export const StringHistoryProvider = ({
  initialValue = [],
  maxEntries = 50,
  children,
}: React.PropsWithChildren<StringHistoryProviderProps>) => {
  const [entries, setEntries] = useLocalStorage<string[]>(
    "history",
    initialValue.slice(0, maxEntries)
  )

  const pushEntry = (value: string) => {
    const copy = [...entries.filter(entry => entry !== value)]
    if (entries.length >= maxEntries) copy.pop()
    setEntries([value, ...copy])
  }

  const setHistory = (entries: string[]) => setEntries(entries)

  const clearHistory = () => setEntries([])

  return (
    <StringHistoryContext.Provider
      value={{
        entries,
        push: pushEntry,
        set: setHistory,
        clear: clearHistory,
      }}
    >
      {children}
    </StringHistoryContext.Provider>
  )
}
