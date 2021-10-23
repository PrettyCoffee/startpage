import React from "react"

import { renderHook } from "@testing-library/react-hooks"

import { StoragePrefixProvider } from "./StoragePrefixProvider"
import { usePrefixStorage } from "./usePrefixStorage"

const STORAGE = window.localStorage
const prefix = "prf-"
const key = "key"
const value = "value"
const wrapper = ({ children }: React.PropsWithChildren<unknown>) => (
  <StoragePrefixProvider prefix={prefix}>{children}</StoragePrefixProvider>
)

describe("Test usePrefixStorage", () => {
  const {
    result: { current: prefixStorage },
  } = renderHook(() => usePrefixStorage(), {
    wrapper,
  })

  it("sets item correctly", () => {
    prefixStorage.setItem(key, value)

    expect(STORAGE.getItem(prefix + key)).toBe(value)
  })

  it("reads item correctly", () => {
    STORAGE.setItem(prefix + key, value)
    expect(prefixStorage.getItem(key)).toBe(value)
  })

  it("removes item correctly", () => {
    STORAGE.setItem(prefix + key, value)
    prefixStorage.removeItem(key)
    expect(STORAGE.getItem(prefix + key)).toBe(null)
  })

  it("clears storage correctly", () => {
    STORAGE.setItem(prefix + key, value)
    STORAGE.setItem(key, value)
    prefixStorage.clear()

    expect(STORAGE.getItem(prefix + key)).toBe(null)
    expect(STORAGE.getItem(key)).toBe(value)
  })

  it("reads storage correctly", () => {
    STORAGE.setItem(prefix + key, value)
    STORAGE.setItem(key, "value2")

    const storage = prefixStorage.getStorage()
    const expected = { key: "value" }

    expect(storage).toStrictEqual(expected)
  })

  it("gets length correctly", () => {
    STORAGE.setItem(prefix + key, value)
    STORAGE.setItem(prefix + "key2", "value2")

    const length = prefixStorage.length()
    expect(length).toBe(2)
  })

  afterEach(() => {
    STORAGE.clear()
  })
})
