import React from "react"

const Context = React.createContext("")

type StoragePrefixProviderProps = {
  /** Storage key prefix for all descendant library components which write into the local storage */
  prefix: string
}

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
