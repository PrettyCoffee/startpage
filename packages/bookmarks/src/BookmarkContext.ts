import { createContext } from "react"

import { InitialBookmarkGroup } from "./BookmarkProvider"

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
  /** Set the bookmarkGroups value
   * @param bookmarkGroups New bookmark groups
   */
  setBookmarkGroups: (bookmarkGroups: InitialBookmarkGroup[]) => void
  /** Add a bookmark group
   * @param label Name of the group
   */
  addGroup: (label: string) => void
  /** Edits a bookmark group
   * @param groupId Id of the group
   * @param label The new label of the group
   */
  editGroup: (groupId: string, label: string) => void
  /** Removes a bookmark group
   * @param groupId Id of the group
   */
  removeGroup: (groupId: string) => void
  /** Adds a bookmark to a group
   * @param groupId Id of the group
   * @param bookmark The bookmark to add
   */
  addBookmark: (groupId: string, bookmark: BookmarkWithoutId) => void
  /** Edits a bookmark from a group
   * @param bookmarkId Id of the bookmark to edit
   * @param bookmark The new bookmark values
   */
  editBookmark: (bookmarkId: string, bookmark: BookmarkWithoutId) => void
  /** Removes a bookmark from a group
   * @param bookmarkId Id of the bookmark to remove
   */
  removeBookmark: (bookmarkId: string) => void
}

const defaultState: BookmarkState = {
  bookmarkGroups: [],
  setBookmarkGroups: () => null,
  addGroup: () => null,
  editGroup: () => null,
  removeGroup: () => null,
  addBookmark: () => null,
  editBookmark: () => null,
  removeBookmark: () => null,
}

export const BookmarkContext = createContext(defaultState)
