import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Header } from "./Header"

const Layout = styled.main`
  display: grid;
  grid-template-areas: ". main .";
  grid-template-columns: auto auto auto;
`

const Content = styled.div`
  ${({ theme: { space } }) => css`
    grid-area: main;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    gap: ${space.largest};
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
