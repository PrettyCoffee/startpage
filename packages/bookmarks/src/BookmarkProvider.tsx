import React from "react"

import { useStorage } from "@startpage/local-storage"

import { Bookmark, BookmarkContext, BookmarkGroup } from "./BookmarkContext"

const getGroup = (bookmarks: BookmarkGroup[], label: string) =>
  bookmarks.find(group => group.label === label)

export type BookmarkProviderProps = {
  /** Initial Bookmark which will be used until you change it with the setter */
  initialBookmarks?: BookmarkGroup[]
}

/** Provider for bookmarks.
 * The Bookmark can be accessed by using the `useBookmarks` hook.
 */
export const BookmarkProvider = ({
  initialBookmarks = [],
  children,
}: React.PropsWithChildren<BookmarkProviderProps>) => {
  const [bookmarkGroups, setBookmarkGroups] = useStorage(
    "bookmarks",
    initialBookmarks
  )

  const addGroup = (label: string) => {
    const group = getGroup(bookmarkGroups, label)
    if (!group) {
      const newBookmarks = [...bookmarkGroups]
      newBookmarks.push({
        label: label,
        bookmarks: [],
      })
      setBookmarkGroups(newBookmarks)
    }
  }

  const removeGroup = (label: string) => {
    const newBookmarks = bookmarkGroups.filter(group => group.label !== label)
    setBookmarkGroups(newBookmarks)
  }

  const addBookmark = (groupLabel: string, bookmark: Bookmark) => {
    const newBookmarks = bookmarkGroups.map(group => {
      if (group.label === groupLabel) group.bookmarks.push(bookmark)
      return group
    })
    setBookmarkGroups(newBookmarks)
  }

  const removeBookmark = (groupLabel: string, bookmark: Bookmark) => {
    const newBookmarks = bookmarkGroups.map(group => {
      if (group.label === groupLabel)
        group.bookmarks = group.bookmarks.filter(
          elem => elem.label !== bookmark.label
        )
      return group
    })
    setBookmarkGroups(newBookmarks)
  }

  return (
    <BookmarkContext.Provider
      value={{
        bookmarkGroups,
        addGroup,
        removeGroup,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}
