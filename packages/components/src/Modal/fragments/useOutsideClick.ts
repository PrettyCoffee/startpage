import { RefObject, useEffect } from "react"

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  active: boolean,
  callback: () => void
) => {
  useEffect(() => {
    const handleClick = (mouseEvent: MouseEvent) => {
      if (!ref.current?.contains(mouseEvent.target as Node)) callback()
    }

    if (active) document.addEventListener("mousedown", handleClick)
    else document.removeEventListener("mousedown", handleClick)

    return () => document.removeEventListener("mousedown", handleClick)
  }, [ref, active, callback])
}
