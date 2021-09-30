import { parseStorageItem } from "./parseStorageItem"

const STORAGE = window.localStorage

const storageKey = "storageKey"
const objectDataCats = [{ someKey: "cats" }, { someKey: "moreCats!" }]
const objectDataDogs = [{ someKey: "dogs" }, { someKey: "moreDogs!" }]
const arrayData = [objectDataCats, objectDataDogs]
const corruptedData = '[{ someKey: "dogs" }, { someKey: "moreDogs!"'

type TestData = {
  type: string
  value: unknown
}

describe("Test parseStorageItem", () => {
  test.each`
    type         | value
    ${"null"}    | ${null}
    ${"boolean"} | ${true}
    ${"number"}  | ${42}
    ${"string"}  | ${"value"}
    ${"object"}  | ${objectDataCats[0]}
    ${"array"}   | ${arrayData[0]}
  `("handles $type values correctly", ({ value }: TestData) => {
    STORAGE.setItem(storageKey, JSON.stringify(value))
    const content = parseStorageItem(storageKey)
    expect(content).toStrictEqual(value)
  })

  it("handles corrupted json", () => {
    STORAGE.setItem(storageKey, corruptedData)
    const content = parseStorageItem(storageKey)
    expect(content).toBeNull()
  })

  afterEach(() => STORAGE.clear())
})
