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
    grid-template-columns: 200px 950px 200px;

    padding: 0 ${space.large};
    max-width: 100%;
    margin-bottom: calc(${space.largest} * 2);
    justify-content: center;

    @media only screen and (max-width: 1400px) {
      grid-template-columns: 200px 1fr;
    }
  `}
`

const Content = styled.div`
  ${({ theme: { space } }) => css`
    max-width: 1024px;
    grid-area: main;
    overflow-x: auto;
    padding: 0 calc(${space.large} * 3);
    @media only screen and (max-width: 1400px) {
      padding-right: 0;
    }
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
