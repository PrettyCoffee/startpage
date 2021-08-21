import { useContext } from "react"

import { StringHistoryContext } from "."

/** Hook for accessing the `StringHistoryContext`.
 * Can only be used if an `StringHistoryProvider` is a Parent component.
 * @returns the history object which is provided by the nearest `StringHistoryProvider`
 */
export const useStringHistory = () => useContext(StringHistoryContext)
