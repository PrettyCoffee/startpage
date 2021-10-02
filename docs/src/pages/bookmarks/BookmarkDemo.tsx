import React from "react"

import {
  BookmarkProvider,
  useBookmarks,
  BookmarkGroup
} from "@startpage/bookmarks"

import { Button } from "../../components"

export const Child = () => {
  const bookmarkState = useBookmarks()

  /* Use the bookmarkState here */

  return (
    <Button onClick={() => console.log(bookmarkState)}>
      Log bookmark state
    </Button>
  )
}

const initialState: BookmarkGroup[] = [
  {
    label: "reddit",
    bookmarks: [
      { label: "r/startpages", url: "https://www.reddit.com/r/startpages/" },
      { label: "r/reactjs", url: "https://www.reddit.com/r/reactjs/" },
      { label: "r/typescript", url: "https://www.reddit.com/r/typescript/" },
    ]
  }
]

export const Parent = () => (
  <BookmarkProvider initialBookmarks={initialState}>
    <Child />
  </BookmarkProvider>
)

