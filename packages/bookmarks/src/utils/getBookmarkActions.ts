import { createId } from "./createId"
import { BookmarkGroup, BookmarkWithoutId } from "../BookmarkContext"

export const getBookmarkActions = (
  bookmarkGroups: BookmarkGroup[],
  setBookmarkGroups: (value: BookmarkGroup[]) => void
) => {
  const addBookmark = (groupId: string, bookmark: BookmarkWithoutId) => {
    const newBookmarks = bookmarkGroups.map(group => {
      if (group.id === groupId)
        group.bookmarks.push({ id: createId(), ...bookmark })
      return group
    })
    setBookmarkGroups(newBookmarks)
  }

  const editBookmark = (bookmarkId: string, newValues: BookmarkWithoutId) => {
    const newBookmarks = bookmarkGroups.map(({ bookmarks, ...group }) => ({
      ...group,
      bookmarks: bookmarks.map(bookmark => {
        if (bookmark.id !== bookmarkId) return bookmark
        return {
          ...bookmark,
          ...newValues,
        }
      }),
    }))
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

  return {
    addBookmark,
    editBookmark,
    removeBookmark,
  }
}
