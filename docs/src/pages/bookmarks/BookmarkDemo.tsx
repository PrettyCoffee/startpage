import React, { useState } from "react"

import {
  BookmarkProvider,
  useBookmarks,
  BookmarkGroup,
} from "@startpage/bookmarks"

import { Button, RowLayout } from "../../components"

export const Child = () => {
  const bookmarkState = useBookmarks()
  const [clicked, setClicked] = useState(false)

  /* Use the bookmarkState here */
  const handleClick = () => {
    console.log(bookmarkState)
    setClicked(true)
  }

  return (
    <RowLayout>
      <Button onClick={handleClick}>Log bookmark state</Button>
      {clicked && "Now take a look into the browser console!"}
    </RowLayout>
  )
}

const initialState: BookmarkGroup[] = [
  {
    label: "reddit",
    bookmarks: [
      { label: "r/startpages", url: "https://www.reddit.com/r/startpages/" },
      { label: "r/reactjs", url: "https://www.reddit.com/r/reactjs/" },
      { label: "r/typescript", url: "https://www.reddit.com/r/typescript/" },
    ],
  },
]

export const Parent = () => (
  <BookmarkProvider initialBookmarks={initialState}>
    <Child />
  </BookmarkProvider>
)
