import { useContext } from "react"

import { BookmarkContext } from "./BookmarkContext"

/** Hook for accessing the global Bookmark.
 * Can only be used if the `BookmarkProvider` is a Parent component.
 * @returns the bookmark context state
 */
export const useBookmarks = () => useContext(BookmarkContext)
