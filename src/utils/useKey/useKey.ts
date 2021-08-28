import React from "react"

import { useKeyboard } from "../useKeyboard/useKeyboard"

/** React hook for observing a specific key
 * @param key Key which should be observed
 *
 * @returns stateful boolean which indicates if the key is pressed
 */
export const useKey = (key: string) => {
  const [keyState, setKeyState] = React.useState<boolean>(false)
  const pressedKeys = useKeyboard()

  React.useEffect(
    () => setKeyState(pressedKeys.includes(key)),
    [pressedKeys, key]
  )

  return keyState
}
