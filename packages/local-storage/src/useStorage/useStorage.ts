import { useState, useCallback, SetStateAction, Dispatch } from "react"

import { parseStorageItem } from "../fragments/parseStorageItem"
import { useStoragePrefix } from "../StoragePrefix/StoragePrefixProvider"

const isCallable = (value: unknown): value is CallableFunction =>
  typeof value === "function"

const STORAGE = window.localStorage

const initiateStorage = <ValueType>(key: string, initialValue: ValueType) => {
  const value = parseStorageItem<ValueType>(key)

  if (value === null) {
    STORAGE.setItem(key, JSON.stringify(initialValue))
    return initialValue
  }

  return value
}

type StateSetter<T> = Dispatch<SetStateAction<T>>

/**Hook for managing your local storage
 * @param ValueType the type of the local storage value
 * @param key the key you want to use in the local storage
 * @param initialValue the default value you want to assign
 *
 * @returns an array with the value and setter function, defaults to initialValue if content cannot be parsed or is unset.
 */
export const useStorage = <ValueType>(
  key: string,
  initialValue: ValueType
): [ValueType, StateSetter<ValueType>] => {
  const prefix = useStoragePrefix()
  const [value, setValue] = useState(
    initiateStorage(prefix + key, initialValue)
  )

  const setStorage: StateSetter<ValueType> = useCallback(
    value => {
      setValue(previous => {
        const newValue = isCallable(value) ? value(previous) : value
        STORAGE.setItem(prefix + key, JSON.stringify(newValue))
        return newValue
      })
    },
    [prefix, key]
  )

  return [value, setStorage]
}
