import { createContext } from "react"

export type BookmarkWithoutId = {
  label: string
  url: string
}

export type Bookmark = {
  id: string
  label: string
  url: string
}

export type BookmarkGroup = {
  id: string
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
   * @param id Id of the group
   */
  removeGroup: (id: string) => void
  /** Adds a bookmark to a group
   * @param groupId Id of the group
   * @param bookmark The bookmark to add
   */
  addBookmark: (groupId: string, bookmark: BookmarkWithoutId) => void
  /** Removes a bookmark from a group
   * @param bookmarkId Id of the bookmark to remove
   */
  removeBookmark: (bookmarkId: string) => void
}

const defaultState: BookmarkState = {
  bookmarkGroups: [],
  addGroup: () => null,
  removeGroup: () => null,
  addBookmark: () => null,
  removeBookmark: () => null,
}

export const BookmarkContext = createContext(defaultState)
