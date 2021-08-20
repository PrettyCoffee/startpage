import { useState, useCallback } from "react"

const initiateStorage = <ValueType>(
  storage: Storage,
  key: string,
  initialValue: ValueType
) => {
  if (!storage) return initialValue

  try {
    const stringValue = storage.getItem(key)
    if (stringValue) {
      return JSON.parse(stringValue) as ValueType
    }
  } catch {
    console.error(
      `The ${key} value from your storage seems to be corrupted, it will be replaced by using the initial value`
    )
  }

  storage.setItem(key, JSON.stringify(initialValue))
  return initialValue
}

export const useStorage = <ValueType>(
  storage: Storage,
  key: string,
  initialValue: ValueType,
  callback?: (value: ValueType) => void
): [ValueType, (value: ValueType) => void] => {
  const [value, setValue] = useState(
    initiateStorage(storage, key, initialValue)
  )

  const setStorage = useCallback(
    (value: ValueType) => {
      storage.setItem(key, JSON.stringify(value))
      setValue(value)
      callback?.(value)
    },
    [callback, key, storage]
  )

  return [value, setStorage]
}
