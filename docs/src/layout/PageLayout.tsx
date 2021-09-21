import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Header } from "./Header"

const Layout = styled.main`
  ${({ theme: { space } }) => css`
    display: grid;
    grid-template-areas: ". main .";
    grid-template-columns: 1fr auto 1fr;
    padding: 0 ${space.largest};
    overflow-y: scroll;
    box-sizing: border-box;
    height: calc(100vh - calc(${space.large} * 3));
  `}
`

const Content = styled.div`
  ${({ theme: { space } }) => css`
    grid-area: main;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    margin-bottom: calc(${space.largest} * 2);
  `}
`

export const PageLayout = ({ children }: React.PropsWithChildren<unknown>) => (
  <>
    <Header />
    <Layout>
      <Content>{children}</Content>
    </Layout>
  </>
)
