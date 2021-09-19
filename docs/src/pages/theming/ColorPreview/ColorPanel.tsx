import React from "react"

import { css, ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"

import { Theme } from "../../../../../src"

const ThemeContainer = styled.div`
  ${({ theme: { color, space } }) => css`
    background-color: ${color.bg.base};
    box-shadow: 0 4px 0 ${color.bg.shade};
    color: ${color.fg.base};
    box-sizing: border-box;
    border-radius: ${space.small};
    padding: ${space.large};
    display: inline-block;
    width: fit-content;
    h2 {
      margin: 0;
    }
    p {
      margin-top: 0;
    }
  `}
`

const Color = styled.div<{ color: string }>`
  ${({ theme: { space }, color }) => css`
    background-color: ${color};
    height: 3rem;
    width: 3rem;
    border-radius: ${space.smallest};
  `}
`

const Surface = styled.div`
  ${({ theme: { space, color } }) => css`
    position: relative;
    box-shadow: 0 0 ${space.medium} ${color.bg.shade};
    grid-area: surface;
    background-color: ${color.bg.surface};
    color: ${color.fg.surface};
    padding: ${space.medium};
    border-radius: ${space.small};
  `}
`

const Accents = styled.div`
  ${({ theme: { space, color } }) => css`
    display: flex;
    grid-area: accents;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 5rem;
      filter: drop-shadow(0 0 ${space.medium} ${color.bg.shade});
      > div {
        margin: ${space.smallest} 0;
      }
    }
  `}
`

const Palette = styled.div`
  ${({ theme: { space, color } }) => css`
    grid-area: palette;
    > div {
      display: flex;
      filter: drop-shadow(0 0 ${space.medium} ${color.bg.shade});
      > div {
        margin: 0 ${space.smallest};
      }
    }
  `}
`

const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
`

const Layout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 10rem 10rem 10rem;
  grid-template-areas:
    "header header header"
    "surface surface accents"
    "palette palette palette";
`

const GreyScale = styled.div`
  ${({ theme: { space, color } }) => css`
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 0 ${space.medium} ${color.bg.shade});
    grid-gap: ${space.small};
  `}
`

export const ColorPanel = ({ theme }: { theme: Theme }) => {
  const { color } = theme
  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeContainer>
        <Layout>
          <Header>
            <h2>{theme.color.name} theme</h2>
          </Header>
          <Surface>
            <p>Surface</p>
            <GreyScale>
              {Object.values(color.bg).map(color => (
                <Color key={color} color={color} />
              ))}
              {Object.values(color.fg).map(color => (
                <Color key={color} color={color} />
              ))}
            </GreyScale>
          </Surface>
          <Accents>
            <div>
              <p>Primary</p>
              <Color key={color.primary.bg} color={color.primary.bg} />
              <Color key={color.primary.base} color={color.primary.base} />
              <Color key={color.primary.fg} color={color.primary.fg} />
            </div>
            <div>
              <p>Secondary</p>
              <Color key={color.secondary.bg} color={color.secondary.bg} />
              <Color key={color.secondary.base} color={color.secondary.base} />
              <Color key={color.secondary.fg} color={color.secondary.fg} />
            </div>
          </Accents>
          <Palette>
            <p>Palette</p>
            <div>
              {Object.values(color.palette).map(color => (
                <Color key={color} color={color} />
              ))}
            </div>
          </Palette>
        </Layout>
      </ThemeContainer>
    </EmotionThemeProvider>
  )
}
