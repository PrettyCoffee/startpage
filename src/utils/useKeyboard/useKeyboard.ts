import React from "react"

/** React hook for observing keyboard actions
 *
 * @returns a stateful array, containing all pressed keys
 */
export const useKeyboard = () => {
  const [keys, setKeys] = React.useState<string[]>([])

  React.useEffect(() => {
    const onKeyDown = ({ key: pressedKey }: KeyboardEvent) =>
      setKeys([pressedKey, ...keys.filter(key => key !== pressedKey)])

    const onKeyUp = ({ key: pressedKey }: KeyboardEvent) =>
      setKeys(keys.filter(key => key !== pressedKey))

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("keyup", onKeyUp)
    }
  }, [keys])

  return keys
}
