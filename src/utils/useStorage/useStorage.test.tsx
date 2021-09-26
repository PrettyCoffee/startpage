import { renderHook, act } from "@testing-library/react-hooks"

import { useStorage } from "./useStorage"

const STORAGE = window.localStorage

const expectStorageValue = (key: string, value: unknown) =>
  expect(STORAGE.getItem(key)).toBe(JSON.stringify(value))

type Data = {
  key: string
}
const objectDataCats: Data[] = [{ key: "cats" }, { key: "moreCats!" }]
const objectDataDogs: Data[] = [{ key: "dogs" }, { key: "moreDogs!" }]
const arrayData: Data[][] = [objectDataCats, objectDataDogs]

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
    ${"number"}  | ${42}                | ${42}
    ${"string"}  | ${"value"}           | ${"newValue"}
    ${"boolean"} | ${true}              | ${false}
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

  it("sets multiple values correctly", () => {
    const keys = ["firstKey", "secondKey"]
    const initialData = [objectDataCats[0], objectDataDogs[0]]
    const nextData = [objectDataCats[1], objectDataDogs[1]]

    const results = [
      renderHook(() => useStorage(keys[0], initialData[0])).result,
      renderHook(() => useStorage(keys[1], initialData[1])).result,
    ]

    // Expect both to have their initial value
    expectStorageValue(keys[0], initialData[0])
    expect(results[0].current[0]).toBe(initialData[0])
    expectStorageValue(keys[1], initialData[1])
    expect(results[1].current[0]).toBe(initialData[1])

    // Set new values
    act(() => results[0].current[1](nextData[0]))
    act(() => results[1].current[1](nextData[1]))

    // Expect both to have their new value
    expectStorageValue(keys[0], nextData[0])
    expect(results[0].current[0]).toBe(nextData[0])
    expectStorageValue(keys[1], nextData[1])
    expect(results[1].current[0]).toBe(nextData[1])
  })

  it("reads existing data correctly", () => {
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
