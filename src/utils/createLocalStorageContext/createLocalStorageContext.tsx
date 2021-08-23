import React from "react"

import { useLocalStorage } from "../useStorage"

type StorageState<StorageType> = [StorageType, (value: StorageType) => void]

/** Factory for creating local storage contexts.
 * You have to use the returned provider as wrapper for your application.
 * The hook will return a setter and getter for the local storage values IF it is used while one parent component is the provider.
 * Note: Only use one provider at a time since its bound to one local storage key.
 *
 * @param StorageType the type of the storage you are creating
 * @param key the key you want to use in the local storage
 * @param initialValue the initial value for the context. Will be used if the hook is called without a provider.
 *
 * @returns an object with the provider and the context hook
 */
export const createLocalStorageContext = <StorageType extends unknown>(
  key: string,
  initialValue: StorageType
) => {
  const initialState: StorageState<StorageType> = [initialValue, () => null]

  const StorageContext = React.createContext(initialState)

  const StorageProvider = ({ children }: React.PropsWithChildren<unknown>) => {
    const [storage, setStorage] = useLocalStorage<StorageType>(
      key,
      initialValue
    )

    return (
      <StorageContext.Provider value={[storage, setStorage]}>
        {children}
      </StorageContext.Provider>
    )
  }

  const useStorage = () => React.useContext(StorageContext)

  return {
    /**
     * Context for your storage.
     * This was created by the createLocalStorage function.
     */
    StorageContext,

    /**
     * Provider for your storage context.
     * This was created by the createLocalStorage function.
     */
    StorageProvider,

    /**
     * Hook for accessing your storage context.
     * This was created by the createLocalStorage function.
     */
    useStorage,
  }
}
