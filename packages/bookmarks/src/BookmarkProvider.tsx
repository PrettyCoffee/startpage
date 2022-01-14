import React from "react"

import { useStorage } from "@startpage/local-storage"

import { BookmarkContext, BookmarkWithoutId } from "./BookmarkContext"
import { fillBookmarkIds } from "./utils/fillBookmarkIds"
import { getBookmarkActions } from "./utils/getBookmarkActions"
import { getGroupActions } from "./utils/getGroupActions"

export type InitialBookmarkGroup = {
  label: string
  bookmarks: BookmarkWithoutId[]
}

export type BookmarkProviderProps = {
  /** Initial bookmarks which will be used until you change it with the setter */
  initialBookmarks?: InitialBookmarkGroup[]
}

/** Provider for bookmarks.
 * The bookmarks can be accessed by using the `useBookmarks` hook.
 */
export const BookmarkProvider = ({
  initialBookmarks = [],
  children,
}: React.PropsWithChildren<BookmarkProviderProps>) => {
  const [bookmarkGroups, setBookmarkGroups] = useStorage(
    "bookmarks",
    fillBookmarkIds(initialBookmarks)
  )

  const setNewBookmarkGroups = (bookmarkGroups: InitialBookmarkGroup[]) =>
    setBookmarkGroups(fillBookmarkIds(bookmarkGroups))

  const groupActions = getGroupActions(bookmarkGroups, setBookmarkGroups)
  const bookmarkActions = getBookmarkActions(bookmarkGroups, setBookmarkGroups)

  return (
    <BookmarkContext.Provider
      value={{
        bookmarkGroups,
        setBookmarkGroups: setNewBookmarkGroups,
        ...groupActions,
        ...bookmarkActions,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}
