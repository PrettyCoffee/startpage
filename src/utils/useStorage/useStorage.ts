import { useState, useCallback } from "react"

const STORAGE = window.localStorage

const initiateStorage = <ValueType>(key: string, initialValue: ValueType) => {
  if (!STORAGE) return initialValue

  try {
    const stringValue = STORAGE.getItem(key)
    if (stringValue) {
      return JSON.parse(stringValue) as ValueType
    }
  } catch {
    console.error(
      `The ${key} value from your storage seems to be corrupted, it will be replaced by using the initial value`
    )
  }

  STORAGE.setItem(key, JSON.stringify(initialValue))
  return initialValue
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
  const [value, setValue] = useState(initiateStorage(key, initialValue))

  const setStorage = useCallback(
    (value: ValueType) => {
      STORAGE.setItem(key, JSON.stringify(value))
      setValue(value)
    },
    [key]
  )

  return [value, setStorage]
}
