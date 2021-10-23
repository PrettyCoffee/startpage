import React from "react"

const Context = React.createContext("")

type StoragePrefixProviderProps = {
  /** The prefix for storage keys */
  prefix: string
}

/** Provider for a storage prefix.
 * The prefix is used by all descendant library components which write into the local storage.
 * It can be accessed by using the `useStoragePrefix` hook.
 */
export const StoragePrefixProvider = ({
  prefix,
  children,
}: React.PropsWithChildren<StoragePrefixProviderProps>) => (
  <Context.Provider value={prefix}>{children}</Context.Provider>
)

/** Hook for using the storage prefix string which is provided by StoragePrefixProvider
 *
 * @returns the provided prefix
 */
export const useStoragePrefix = () => React.useContext(Context)
