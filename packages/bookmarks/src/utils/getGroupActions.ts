import { createId } from "./createId"
import { BookmarkGroup } from ".."

export const getGroupActions = (
  bookmarkGroups: BookmarkGroup[],
  setBookmarkGroups: (value: BookmarkGroup[]) => void
) => {
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

  return {
    addGroup,
    editGroup,
    removeGroup,
  }
}
