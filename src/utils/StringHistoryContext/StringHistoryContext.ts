import { createContext } from "react"

export type StringHistoryState = {
  /** The current entries in the history. This is a react state and only meant for reading, not writing. */
  entries: string[]
  /** Pushes the provided value onto the top of the history */
  push: (entry: string) => void
  /** Replaces the history with the provided entries */
  set: (history: string[]) => void
  /** Removes all entries from the history */
  clear: () => void
}

const defaultState: StringHistoryState = {
  entries: [],
  push: () => null,
  set: () => null,
  clear: () => null,
}

/** Context for a string history which is persisted in the local storage.
 * Use the `StringHistoryProvider` to use the context.
 * The history can be accessed by using the `useStringHistory` hook while inside the StringHistoryProvider.
 */
export const StringHistoryContext = createContext(defaultState)
