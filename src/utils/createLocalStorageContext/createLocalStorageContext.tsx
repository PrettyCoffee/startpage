import React from "react"

import { useLocalStorage } from "../useStorage"

type StorageState<ValueType> = [ValueType, (value: ValueType) => void]

/** Factory for creating local storage contexts.
 * You have to use the returned provider as wrapper for your application.
 * The hook will return a setter and getter for the local storage values IF it is used while one parent component is the provider.
 * Note: Only use one provider at a time since its bound to one local storage key.
 *
 * @param ValueType the type of the local storage value
 * @param key the key you want to use in the local storage
 * @param initialValue the default value you want to assign. Will also be used if the hook is called without a provider.
 *
 * @returns an object with the context, provider and context hook
 */
export const createLocalStorageContext = <ValueType extends unknown>(
  key: string,
  initialValue: ValueType
) => {
  const initialState: StorageState<ValueType> = [initialValue, () => null]

  const StorageContext = React.createContext(initialState)

  const StorageProvider = ({ children }: React.PropsWithChildren<unknown>) => {
    const [storage, setStorage] = useLocalStorage<ValueType>(key, initialValue)

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
