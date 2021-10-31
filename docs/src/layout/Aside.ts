import styled from "@emotion/styled"

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  :first-of-type {
    grid-area: sidenav;
    align-items: flex-end;
  }
  :last-of-type {
    grid-area: scrollspy;
    align-items: flex-start;
    @media only screen and (max-width: 1400px) {
      display: none;
    }
  }
`
