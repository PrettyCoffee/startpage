import { useStorage } from "./useStorage"

/**Hook for managing your local storage
 * @param ValueType the type of the local storage value
 * @param key the key you want to use in the local storage
 * @param initialValue the default value you want to assign
 *
 * @returns an array with the value and setter function, defaults to initialValue if content cannot be parsed or is unset.
 */
export const useLocalStorage = <ValueType>(
  key: string,
  initialValue: ValueType,
): [ValueType, (value: ValueType) => void] =>
  useStorage(window.localStorage, key, initialValue)
