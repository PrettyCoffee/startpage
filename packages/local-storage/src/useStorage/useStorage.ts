import { useState, useCallback } from "react"

import { parseStorageItem } from "../fragments/parseStorageItem"
import { useStoragePrefix } from "../StoragePrefix/StoragePrefixProvider"

const STORAGE = window.localStorage

const initiateStorage = <ValueType>(key: string, initialValue: ValueType) => {
  const value = parseStorageItem<ValueType>(key)

  if (value === null) {
    STORAGE.setItem(key, JSON.stringify(initialValue))
    return initialValue
  }

  return value
}

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
): [ValueType, (value: ValueType) => void] => {
  const prefix = useStoragePrefix()
  const [value, setValue] = useState(
    initiateStorage(prefix + key, initialValue)
  )

  const setStorage = useCallback(
    (value: ValueType) => {
      STORAGE.setItem(prefix + key, JSON.stringify(value))
      setValue(value)
    },
    [prefix, key]
  )

  return [value, setStorage]
}
