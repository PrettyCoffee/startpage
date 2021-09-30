import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Header } from "./Header"
import { Navigation } from "./Navigation/Navigation"
import { Scrollspy } from "./Scrollspy/Scrollspy"

const Layout = styled.main`
  ${({ theme: { space } }) => css`
    display: grid;
    grid-template-areas: "sidenav main scrollspy";
    grid-template-columns: 1fr 2fr 1fr;
    padding: 0 ${space.largest};
    box-sizing: border-box;
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
      <Navigation />
      <Content>{children}</Content>
      <Scrollspy />
    </Layout>
  </>
)
