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
  /** The bookmarks in the provider */
  bookmarkGroups: BookmarkGroup[]
  /** Add a bookmark group
   * @param label Name of the group
   */
  addGroup: (label: string) => void
  /** Removes a bookmark group
   * @param label Name of the group
   */
  removeGroup: (label: string) => void
  /** Adds a bookmark to a group
   * @param groupLabel Name of the group
   * @param bookmark The bookmark to add
   */
  addBookmark: (groupLabel: string, bookmark: Bookmark) => void
  /** Removes a bookmark from a group
   * @param groupLabel Name of the group
   * @param bookmark The bookmark to remove
   */
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
