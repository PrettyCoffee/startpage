import { createContext } from "react"

export type Bookmark = {
  label: string
  url: string
}

export type BookmarkGroup = {
  label: string
  bookmarks: Bookmark[]
}

export type BookmarkState = {
  bookmarkGroups: BookmarkGroup[]
  addGroup: (label: string) => void
  removeGroup: (label: string) => void
  addBookmark: (groupLabel: string, bookmark: Bookmark) => void
  removeBookmark: (groupLabel: string, bookmark: Bookmark) => void
}

const defaultState: BookmarkState = {
  bookmarkGroups: [],
  addGroup: () => null,
  removeGroup: () => null,
  addBookmark: () => null,
  removeBookmark: () => null,
}

export const BookmarkContext = createContext(defaultState)
