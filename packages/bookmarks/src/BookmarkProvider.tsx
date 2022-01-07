import React from "react"

import { useStorage } from "@startpage/local-storage"

import { BookmarkContext, BookmarkWithoutId } from "./BookmarkContext"
import { createId } from "./utils/createId"
import { fillBookmarkIds } from "./utils/fillBookmarkIds"

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

  const addGroup = (label: string) => {
    const newBookmarks = [...bookmarkGroups]
    newBookmarks.push({
      id: createId(),
      label: label,
      bookmarks: [],
    })
    setBookmarkGroups(newBookmarks)
  }

  const editGroup = (id: string, label: string) => {
    const newBookmarks = bookmarkGroups.map(group => {
      if (group.id !== id) return group
      return {
        ...group,
        label,
      }
    })
    setBookmarkGroups(newBookmarks)
  }

  const removeGroup = (id: string) => {
    const newBookmarks = bookmarkGroups.filter(group => group.id !== id)
    setBookmarkGroups(newBookmarks)
  }

  const addBookmark = (groupId: string, bookmark: BookmarkWithoutId) => {
    const newBookmarks = bookmarkGroups.map(group => {
      if (group.id === groupId)
        group.bookmarks.push({ id: createId(), ...bookmark })
      return group
    })
    setBookmarkGroups(newBookmarks)
  }

  const removeBookmark = (bookmarkId: string) => {
    const newBookmarks = bookmarkGroups.map(({ id, label, bookmarks }) => ({
      id,
      label,
      bookmarks: bookmarks.filter(({ id }) => id !== bookmarkId),
    }))
    setBookmarkGroups(newBookmarks)
  }

  return (
    <BookmarkContext.Provider
      value={{
        bookmarkGroups,
        addGroup,
        editGroup,
        removeGroup,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}
