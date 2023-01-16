import React from "react"

import { act, renderHook } from "@testing-library/react"

import { BookmarkGroup } from "./BookmarkContext"
import { BookmarkProvider } from "./BookmarkProvider"
import { useBookmarks } from "./useBookmarks"
import { fillBookmarkIds } from "./utils/fillBookmarkIds"

const STORAGE = window.localStorage
const STORAGE_KEY = "bookmarks"

const setStorageValue = (value: BookmarkGroup[]) =>
  STORAGE.setItem(STORAGE_KEY, JSON.stringify(value))

const expectStorageValue = (value: BookmarkGroup[]) =>
  expect(STORAGE.getItem(STORAGE_KEY)).toBe(JSON.stringify(value))

const wrapper = ({ children }: React.PropsWithChildren<unknown>) => (
  <BookmarkProvider>{children}</BookmarkProvider>
)

const Groups: BookmarkGroup[] = fillBookmarkIds([
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
])

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
    const label = "group-added"
    const expected: BookmarkGroup[] = [{ id: "", label: label, bookmarks: [] }]
    const { result } = renderHook(() => useBookmarks(), { wrapper })

    act(() => result.current.addGroup(label))

    const received = result.current.bookmarkGroups
    expected[0].id = received[0].id

    expect(received).toMatchObject(expected)
    expectStorageValue(expected)
  })

  it("edits a group", () => {
    setStorageValue(Groups)
    const newLabel = "group-edited"
    const groupToEdit = Groups[0]
    const expected: BookmarkGroup[] = [...Groups]
    expected[0].label = newLabel

    const { result } = renderHook(() => useBookmarks(), { wrapper })

    act(() => result.current.editGroup(groupToEdit.id, newLabel))

    expect(result.current.bookmarkGroups).toMatchObject(expected)
    expectStorageValue(expected)
  })

  it("removes a group", () => {
    setStorageValue(Groups)
    const idToRemove = Groups[0].id
    const expected = [Groups[1]]
    const { result } = renderHook(() => useBookmarks(), { wrapper })

    act(() => result.current.removeGroup(idToRemove))

    expect(result.current.bookmarkGroups).toMatchObject(expected)
    expectStorageValue(expected)
  })

  it("adds a bookmark", () => {
    setStorageValue(Groups)
    const group = Groups[0]
    const bookmark = {
      id: "",
      label: "bookmark-0",
      url: "https://startpage.com",
    }
    const expected = [
      { ...group, bookmarks: [...group.bookmarks, bookmark] },
      Groups[1],
    ]

    const { result } = renderHook(() => useBookmarks(), { wrapper })

    act(() => result.current.addBookmark(group.id, bookmark))

    const received = result.current.bookmarkGroups

    expected[0].bookmarks[1].id = received[0].bookmarks[1].id

    expect(received).toMatchObject(expected)
    expectStorageValue(expected)
  })

  it("edits a bookmark", () => {
    setStorageValue(Groups)
    const newValues = {
      label: "bookmark-edited",
      url: "https://www.test.com",
    }
    const idToEdit = Groups[0].bookmarks[0].id
    const expected = [...Groups]
    expected[0].bookmarks[0] = {
      id: idToEdit,
      ...newValues,
    }

    const { result } = renderHook(() => useBookmarks(), { wrapper })

    act(() => result.current.editBookmark(idToEdit, newValues))

    expect(result.current.bookmarkGroups).toMatchObject(expected)
    expectStorageValue(expected)
  })

  it("removes a bookmark", () => {
    setStorageValue(Groups)
    const { id, label, bookmarks } = Groups[0]
    const idToRemove = bookmarks[0].id
    const expected = [{ id, label, bookmarks: [] }, Groups[1]]

    const { result } = renderHook(() => useBookmarks(), { wrapper })

    act(() => result.current.removeBookmark(idToRemove))

    expect(result.current.bookmarkGroups).toMatchObject(expected)
    expectStorageValue(expected)
  })

  afterEach(() => {
    STORAGE.clear()
  })
})
