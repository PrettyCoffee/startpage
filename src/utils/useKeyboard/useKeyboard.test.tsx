import React from "react"

import { fireEvent, render } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks"

import { useKeyboard } from "./useKeyboard"

const testKeys = ["Enter", "ArrowUp", "Control"]

type KeyProps = {
  callback: (keys: string[]) => void
}
const Key = ({ callback }: KeyProps) => {
  const pressed = useKeyboard()
  React.useEffect(() => {
    callback(pressed)
  }, [pressed, callback])
  return <div>{pressed}</div>
}

describe("Test useKeyboard", () => {
  it("captures single key stroke", () => {
    const { result } = renderHook(() => useKeyboard())

    expect(result.current).toStrictEqual([])

    fireEvent.keyDown(document, { key: testKeys[0] })
    expect(result.current).toStrictEqual([testKeys[0]])

    fireEvent.keyUp(document, { key: testKeys[0] })
    expect(result.current).toStrictEqual([])
  })

  it("captures multiples keyboard interactions", () => {
    const { result } = renderHook(() => useKeyboard())

    expect(result.current).toStrictEqual([])

    fireEvent.keyDown(document, { key: testKeys[0] })
    expect(result.current).toStrictEqual([testKeys[0]])

    fireEvent.keyDown(document, { key: testKeys[1] })
    expect(result.current).toStrictEqual([testKeys[1], testKeys[0]])

    fireEvent.keyDown(document, { key: testKeys[2] })
    expect(result.current).toStrictEqual([
      testKeys[2],
      testKeys[1],
      testKeys[0],
    ])

    fireEvent.keyUp(document, { key: testKeys[2] })
    expect(result.current).toStrictEqual([testKeys[1], testKeys[0]])

    fireEvent.keyUp(document, { key: testKeys[0] })
    expect(result.current).toStrictEqual([testKeys[1]])

    fireEvent.keyUp(document, { key: testKeys[1] })
    expect(result.current).toStrictEqual([])
  })

  it("removes listeners", () => {
    const testCallback = jest.fn()
    const { rerender } = render(
      <div>
        <Key callback={testCallback} />
      </div>
    )

    fireEvent.keyDown(document, { key: testKeys[0] })
    fireEvent.keyUp(document, { key: testKeys[0] })

    rerender(<div></div>)

    fireEvent.keyDown(document, { key: testKeys[0] })
    fireEvent.keyUp(document, { key: testKeys[0] })

    expect(testCallback).toHaveBeenCalledTimes(3)
  })
})
