import { useStorage } from "./useStorage"

/**Hook for managing your session storage
 * @param ValueType type of the session storage value
 * @param key the key you want to use in the session storage
 * @param initialValue the default value you want to assign
 * @param callback callback function which will be executed when the setter is used
 *
 * @returns an array with the value and setter function, defaults to initialValue if content cannot be parsed or is unset.
 */
export const useSessionStorage = <ValueType>(
  key: string,
  initialValue: ValueType,
  callback?: (value: ValueType) => void
): [ValueType, (value: ValueType) => void] =>
  useStorage(window.sessionStorage, key, initialValue, callback)
