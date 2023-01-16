import { renderHook, act } from "@testing-library/react"

import { useStorage } from "./useStorage"

const STORAGE = window.localStorage

const expectStorageValue = (key: string, value: unknown) =>
  expect(STORAGE.getItem(key)).toBe(JSON.stringify(value))

const objectDataCats = [{ key: "cats" }, { key: "moreCats!" }]
const objectDataDogs = [{ key: "dogs" }, { key: "moreDogs!" }]
const arrayData = [objectDataCats, objectDataDogs]

type TestData = {
  type: string
  initialValue: unknown
  nextValue: unknown
}
const storageKey = "storageKey"

describe("Test useStorage", () => {
  test.each`
    type         | initialValue         | nextValue
    ${"null"}    | ${null}              | ${null}
    ${"boolean"} | ${true}              | ${false}
    ${"number"}  | ${42}                | ${69}
    ${"string"}  | ${"value"}           | ${"newValue"}
    ${"object"}  | ${objectDataCats[0]} | ${objectDataCats[1]}
    ${"array"}   | ${arrayData[0]}      | ${arrayData[1]}
  `("sets $type values correctly", ({ initialValue, nextValue }: TestData) => {
    const { result } = renderHook(() => useStorage(storageKey, initialValue))

    expectStorageValue(storageKey, initialValue)
    expect(result.current[0]).toBe(initialValue)

    act(() => result.current[1](nextValue))

    expectStorageValue(storageKey, nextValue)
    expect(result.current[0]).toBe(nextValue)
  })

  it("sets multiple values correctly", async () => {
    const keys = ["firstKey", "secondKey"]
    const initialData = [objectDataCats[0], objectDataDogs[0]]
    const nextData = [objectDataCats[1], objectDataDogs[1]]

    const hooks = [
      renderHook(() => useStorage(keys[0], initialData[0])).result,
      renderHook(() => useStorage(keys[1], initialData[1])).result,
    ]

    hooks.forEach((hook, index) => {
      const key = keys[index]
      const initial = initialData[index]
      const next = nextData[index]

      expectStorageValue(key, initial)
      expect(hook.current[0]).toBe(initial)

      act(() => hook.current[1](next))

      expectStorageValue(key, next)
      expect(hook.current[0]).toBe(next)
    })
  })

  it("reads existing data correctly", async () => {
    // prepare local storage
    const existingValue = "i am testing"
    STORAGE.setItem(storageKey, JSON.stringify(existingValue))

    const { result } = renderHook(() => useStorage(storageKey, objectDataCats))

    expectStorageValue(storageKey, existingValue)
    expect(result.current[0]).toBe(existingValue)
  })

  afterEach(() => {
    STORAGE.clear()
  })
})
