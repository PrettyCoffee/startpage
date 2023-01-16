import { createId } from "./createId"
import { BookmarkGroup } from "../BookmarkContext"
import { InitialBookmarkGroup } from "../BookmarkProvider"

export const fillBookmarkIds = (
  groups: InitialBookmarkGroup[]
): BookmarkGroup[] =>
  groups.map(({ label, bookmarks }) => ({
    id: createId(),
    label,
    bookmarks: bookmarks.map(({ label, url }) => ({
      id: createId(),
      label,
      url,
    })),
  }))
