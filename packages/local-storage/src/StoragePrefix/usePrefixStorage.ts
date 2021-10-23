import { useStoragePrefix } from "."

const STORAGE = window.localStorage

const getPrefixedKeys = (prefix: string) =>
  Object.keys(STORAGE)
    .filter(key => key.startsWith(prefix))
    .map(key => key.replace(prefix, ""))

const setPrefixedItem = (prefix: string, key: string, value: string) =>
  STORAGE.setItem(prefix + key, value)

const getPrefixedItem = (prefix: string, key: string) =>
  STORAGE.getItem(prefix + key)

const removePrefixedItem = (prefix: string, key: string) =>
  STORAGE.removeItem(prefix + key)

const clearPrefixed = (prefix: string) =>
  getPrefixedKeys(prefix).forEach(key => removePrefixedItem(prefix, key))

const getPrefixedlength = (prefix: string) => getPrefixedKeys(prefix).length

const getPrefixedStorage = (prefix: string): Record<string, string | null> => {
  const storage: Record<string, string | null> = {}
  getPrefixedKeys(prefix).forEach(
    key => (storage[key] = getPrefixedItem(prefix, key))
  )
  return storage
}

type PrefixStorage = {
  /** Removes all items from the prefix storage */
  clear: () => void
  /** Returns number of items in the prefix storage */
  length: () => number
  /** Set an item in the prefix storage */
  setItem: (key: string, value: string) => void
  /** Get an item from the prefix storage */
  getItem: (key: string) => string | null
  /** Remove an item from the prefix storage */
  removeItem: (key: string) => void
  /** Reads all elements from the prefix storage */
  getStorage: () => Record<string, string | null>
}

/** window.localStorage implementation, only affecting the keys prefixed by a StoragePrefixProvider
 *
 * @returns an object with the localStorage functions
 */
export const usePrefixStorage = (): PrefixStorage => {
  const prefix = useStoragePrefix()

  return {
    clear: () => clearPrefixed(prefix),
    length: () => getPrefixedlength(prefix),
    setItem: (key, value) => setPrefixedItem(prefix, key, value),
    getItem: key => getPrefixedItem(prefix, key),
    removeItem: key => removePrefixedItem(prefix, key),
    getStorage: () => getPrefixedStorage(prefix),
  }
}
