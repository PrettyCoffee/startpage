const STORAGE = window.localStorage

export const parseStorageItem = <ValueType>(key: string) => {
  const stringValue = STORAGE.getItem(key)
  if (stringValue == null) return null

  try {
    return JSON.parse(stringValue) as ValueType
  } catch {
    return null
  }
}
