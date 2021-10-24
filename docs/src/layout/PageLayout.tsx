import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Header } from "./Header"
import { Navigation } from "./Navigation/Navigation"
import { Scrollspy } from "./Scrollspy/Scrollspy"

export const Aside = styled.aside`
  ${({ theme: { space } }) => css`
    width: 12rem;
    display: flex;
    flex-direction: column;
    :first-of-type {
      grid-area: sidenav;
      align-items: flex-end;
      margin-left: ${space.large};
    }
    :last-of-type {
      grid-area: scrollspy;
      align-items: flex-start;
      margin-right: ${space.large};
      @media only screen and (max-width: 1200px) {
        display: none;
      }
    }
  `}
`

const Layout = styled.main`
  ${({ theme: { space } }) => css`
    margin: 0 auto;
    max-width: 1700px;
    width: 100%;
    display: grid;
    grid-template-areas: "sidenav main scrollspy";
    grid-template-columns: auto 1fr auto;
    box-sizing: border-box;
    margin-bottom: calc(${space.largest} * 2);
  `}
`

const Content = styled.div`
  ${({ theme: { space } }) => css`
    grid-area: main;
    width: calc(100% - 12rem);
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    margin: 0 calc(${space.large} * 3);
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
