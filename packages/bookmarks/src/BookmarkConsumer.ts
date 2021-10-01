import { BookmarkContext } from "./BookmarkContext"

/** Consumer for accessing bookmarks.
 * Can only be used if the `BookmarkProvider` is a Parent component.
 */
export const BookmarkConsumer = BookmarkContext.Consumer
