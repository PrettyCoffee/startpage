import React from "react"

import { act, renderHook } from "@testing-library/react-hooks"

import { BookmarkGroup } from "./BookmarkContext"
import { BookmarkProvider } from "./BookmarkProvider"
import { useBookmarks } from "./useBookmarks"

const STORAGE = window.localStorage
const STORAGE_KEY = "bookmarks"

const setStorageValue = (value: BookmarkGroup[]) =>
  STORAGE.setItem(STORAGE_KEY, JSON.stringify(value))

const expectStorageValue = (value: BookmarkGroup[]) =>
  expect(STORAGE.getItem(STORAGE_KEY)).toBe(JSON.stringify(value))

const wrapper = ({ children }: React.PropsWithChildren<unknown>) => (
  <BookmarkProvider>{children}</BookmarkProvider>
)

const Groups: BookmarkGroup[] = [
  {
    label: "group-0",
    bookmarks: [{ label: "bookmark-0", url: "https://google.com" }],
  },
  {
    label: "group-1",
    bookmarks: [
      { label: "bookmark-0", url: "https://bing.com" },
      { label: "bookmark-1", url: "https://ddg.com" },
    ],
  },
]

describe("Test bookmark context", () => {
  it("uses initial value", () => {
    const { result } = renderHook(() => useBookmarks(), { wrapper })
    expect(result.current.bookmarkGroups).toMatchObject([])
    expectStorageValue([])
  })

  it("uses existing value", () => {
    setStorageValue(Groups)
    const { result } = renderHook(() => useBookmarks(), { wrapper })
    expect(result.current.bookmarkGroups).toMatchObject(Groups)
    expectStorageValue(Groups)
  })

  it("adds a group", () => {
    const label = "group"
    const expected = [{ label: label, bookmarks: [] }]
    const { result } = renderHook(() => useBookmarks(), { wrapper })

    act(() => result.current.addGroup(label))

    expect(result.current.bookmarkGroups).toMatchObject(expected)
    expectStorageValue(expected)
  })

  it("removes a group", () => {
    setStorageValue(Groups)
    const label = Groups[0].label
    const expected = [Groups[1]]
    const { result } = renderHook(() => useBookmarks(), { wrapper })

    act(() => result.current.removeGroup(label))

    expect(result.current.bookmarkGroups).toMatchObject(expected)
    expectStorageValue(expected)
  })

  it("adds a bookmark", () => {
    setStorageValue(Groups)
    const group = Groups[0]
    const bookmark = { label: "bookmark-0", url: "https://startpage.com" }
    const expected = [
      { ...group, bookmarks: [...group.bookmarks, bookmark] },
      Groups[1],
    ]

    const { result } = renderHook(() => useBookmarks(), { wrapper })

    act(() => result.current.addBookmark(group.label, bookmark))

    expect(result.current.bookmarkGroups).toMatchObject(expected)
    expectStorageValue(expected)
  })

  it("removes a bookmark", () => {
    setStorageValue(Groups)
    const group = Groups[0]
    const expected = [{ ...group, bookmarks: [] }, Groups[1]]

    const { result } = renderHook(() => useBookmarks(), { wrapper })

    act(() => result.current.removeBookmark(group.label, group.bookmarks[0]))

    expect(result.current.bookmarkGroups).toMatchObject(expected)
    expectStorageValue(expected)
  })

  afterEach(() => {
    STORAGE.clear()
  })
})
