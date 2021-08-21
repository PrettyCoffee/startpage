/* eslint-disable jest/expect-expect */
import React from "react"

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { StringHistoryProvider } from "./StringHistoryProvider"
import { useStringHistory } from "./useStringHistory"

const testIds = {
  entries: "entries",
  pushButton: "pushButton",
  setButton: "setButton",
  clearButton: "clearButton",
}

const testData = ["test-0", "test-1", "test-2"]

const expectHistoryToBe = (value: string[] | null) => {
  const storageValue = window.localStorage.getItem("history")
  const historyText = screen.getByTestId(testIds.entries)

  if (value === null) {
    expect(storageValue).toBe(null)
    expect(historyText).toBeEmptyDOMElement()
  } else {
    expect(storageValue).toBe(JSON.stringify(value))
    expect(historyText).toHaveTextContent(value.join(""))
  }
}

const HistoryContent = () => {
  const history = useStringHistory()
  return (
    <>
      <button
        data-testid={testIds.pushButton}
        onClick={() => history.push("test-" + history.entries.length)}
      />
      <button
        data-testid={testIds.setButton}
        onClick={() => history.set(testData)}
      />
      <button
        data-testid={testIds.clearButton}
        onClick={() => history.clear()}
      />
      <p data-testid={testIds.entries}>{history.entries}</p>
    </>
  )
}

describe("Test string history context", () => {
  describe("Provider", () => {
    it("renders passed children", () => {
      render(
        <StringHistoryProvider>
          <HistoryContent />
        </StringHistoryProvider>
      )

      Object.values(testIds).forEach(testId =>
        expect(screen.getByTestId(testId)).toBeInTheDocument()
      )
    })

    it("sets an initial value", () => {
      render(
        <StringHistoryProvider initialValue={testData}>
          <HistoryContent />
        </StringHistoryProvider>
      )

      expectHistoryToBe(testData)
    })

    it("limits maximum number of entries", () => {
      const max = 10
      const entries = []
      for (let i = 0; i < max + 1; i++) {
        entries.push("test-" + i)
      }
      render(
        <StringHistoryProvider initialValue={entries} maxEntries={max}>
          <HistoryContent />
        </StringHistoryProvider>
      )

      expectHistoryToBe(entries.slice(0, max))

      const pushButton = screen.getByTestId(testIds.pushButton)
      userEvent.click(pushButton)

      expectHistoryToBe(["test-" + max, ...entries.slice(0, max - 1)])
    })
  })

  describe("Consumer", () => {
    it("pushes values", () => {
      render(
        <StringHistoryProvider>
          <HistoryContent />
        </StringHistoryProvider>
      )

      const pushButton = screen.getByTestId(testIds.pushButton)

      userEvent.click(pushButton)
      expectHistoryToBe(["test-0"])

      userEvent.click(pushButton)
      expectHistoryToBe(["test-1", "test-0"])
    })

    it("filters doubled values", () => {
      render(
        <StringHistoryProvider initialValue={[...testData, "test-4"]}>
          <HistoryContent />
        </StringHistoryProvider>
      )

      const pushButton = screen.getByTestId(testIds.pushButton)
      userEvent.click(pushButton)

      expectHistoryToBe(["test-4", ...testData])
    })

    it("sets the history", () => {
      render(
        <StringHistoryProvider>
          <HistoryContent />
        </StringHistoryProvider>
      )

      const setButton = screen.getByTestId(testIds.setButton)
      userEvent.click(setButton)

      expectHistoryToBe(testData)
    })

    it("clears the history", () => {
      render(
        <StringHistoryProvider initialValue={testData}>
          <HistoryContent />
        </StringHistoryProvider>
      )

      const clearButton = screen.getByTestId(testIds.clearButton)
      userEvent.click(clearButton)

      expectHistoryToBe([])
    })
  })

  afterEach(() => {
    window.localStorage.clear()
  })
})
