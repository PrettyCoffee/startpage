import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Tab, TabGroup } from "@startpage/components"

import { TabGroup as StyledTabGroup } from "../../../components"
import { DemoLayout } from "./DemoLayout"

const Line = styled.div`
  ${({ theme: { color } }) => css`
    white-space: nowrap;
    color: ${color.fg.base};
    user-select: none;
  `}
`
const Block = styled.div`
  transform: rotate(30deg);
`
const Layout = styled.div`
  width: 15rem;
  height: 5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const getWordBlock = (word: string) => {
  const words = Array<string>(10).fill(word)
  const line = words.join(" ")
  const lines = Array<string>(10).fill(line)
  return (
    <Block>
      {lines.map((line, index) => (
        <Line key={index}>{line}</Line>
      ))}
    </Block>
  )
}

type Props = {
  word: string
}
const Content = ({ word }: Props) => (
  <Layout aria-disabled="true">{getWordBlock(word)}</Layout>
)

export const TabDemo = () => {
  const handleChange = () => console.log("tab change!")

  return (
    <DemoLayout>
      <TabGroup onChange={handleChange}>
        <Tab title="Tab 1">
          <Content word="foo" />
        </Tab>
        <Tab title="Tab 2">
          <Content word="bar" />
        </Tab>
        <Tab title="Tab 3">
          <Content word="baz" />
        </Tab>
      </TabGroup>
      <StyledTabGroup onChange={handleChange}>
        <Tab title="Tab 1">
          <Content word="foo" />
        </Tab>
        <Tab title="Tab 2">
          <Content word="bar" />
        </Tab>
        <Tab title="Tab 3">
          <Content word="baz" />
        </Tab>
      </StyledTabGroup>
    </DemoLayout>
  )
}
