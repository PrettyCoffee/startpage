import React from "react"

import { fireEvent, render } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks"

import { useKey } from "./useKey"

const testKey = "Enter"

type KeyProps = {
  callback: () => void
}
const Key = ({ callback }: KeyProps) => {
  const pressed = useKey(testKey)
  React.useEffect(() => {
    if (pressed) callback()
  }, [pressed, callback])
  return <div>{pressed}</div>
}

describe("Test useKey", () => {
  it("removes listeners", () => {
    const testCallback = jest.fn()
    const { rerender } = render(
      <div>
        <Key callback={testCallback} />
      </div>
    )

    fireEvent.keyDown(document, { key: testKey })
    fireEvent.keyUp(document, { key: testKey })

    rerender(<div></div>)

    fireEvent.keyDown(document, { key: testKey })
    fireEvent.keyUp(document, { key: testKey })

    expect(testCallback).toHaveBeenCalledTimes(1)
  })

  it.each(["a", "Enter", "ArrowRight", "Tab", "Control", "1", "Backspace"])(
    "captures $key press correctly",
    key => {
      const { result } = renderHook(() => useKey(key))

      expect(result.current).toBe(false)

      fireEvent.keyDown(document, { key: key })
      expect(result.current).toBe(true)

      fireEvent.keyUp(document, { key: key })
      expect(result.current).toBe(false)
    }
  )
})
