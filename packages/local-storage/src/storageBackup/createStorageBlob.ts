import { parseStorageItem } from "../fragments/parseStorageItem"

const getStorageAsObject = (keys: string[]) => {
  const storageBackup: Record<string, unknown> = {}
  keys.forEach(key => (storageBackup[key] = parseStorageItem<unknown>(key)))
  return storageBackup
}

export const createStorageBlob = (keys: string[]) => {
  const storage = getStorageAsObject(keys)

  const fileContent = JSON.stringify(storage, null, 2)
  const file = new Blob([fileContent])

  return URL.createObjectURL(file)
}
