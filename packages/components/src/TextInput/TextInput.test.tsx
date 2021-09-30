import React from "react"

import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { TextInput } from "./"

describe("Test text input", () => {
  it("renders text input", () => {
    render(<TextInput />)
    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
  })

  it("sets input type correctly", () => {
    render(<TextInput type="search" />)
    const input = screen.getByRole("searchbox")
    expect(input).toBeInTheDocument()
  })

  it("renders an extra", () => {
    const content = "i am testing"
    render(<TextInput leftExtra={<span>{content}</span>} />)
    const input = screen.getByText(content)
    expect(input).toBeInTheDocument()
  })

  it("triggers an onChange event", () => {
    const onChange = jest.fn()
    const value = "i am testing"
    render(<TextInput onChange={value => onChange(value)} />)

    const input = screen.getByRole("textbox")
    userEvent.type(input, value)

    expect(input).toHaveValue(value)
    expect(onChange).toHaveBeenLastCalledWith(value)
  })
})
