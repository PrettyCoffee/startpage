import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { useLocation } from "react-router"

import { Aside } from "../PageLayout"
import { getSections, Section } from "./getSections"
import { useScrollPosition } from "./useScrollPosition"

const NavList = styled.ul`
  ${({ theme: { space } }) => css`
    position: sticky;
    top: calc(${space.largest} * 2);
    padding: 0;
  `}
`

type NavItemProps = { active: boolean }

const NavItem = styled.li<NavItemProps>`
  ${({ theme: { space, color }, active }) => css`
    list-style: none;
    cursor: pointer;
    white-space: nowrap;

    &.H2 {
      padding-left: ${space.medium};
      padding-top: ${space.small};
    }

    &.H3 {
      padding-left: calc(${space.medium} * 2);
    }

    :hover {
      color: ${color.secondary.fg};
      ::before {
        content: ">";
        position: absolute;
        left: -${space.medium};
      }
    }

    ${active &&
    css`
      color: ${color.primary.fg};
      ::before {
        content: ">";
        position: absolute;
        left: -${space.medium};
      }
    `}
  `}
`

const scrollTo = (posY: number) =>
  window.scrollTo({ top: posY, behavior: "smooth" })

export const Scrollspy = () => {
  const loc = useLocation()
  const scrollPos = useScrollPosition()
  const [sections, setSections] = React.useState<Section[]>([])

  React.useEffect(() => {
    setTimeout(() => setSections(getSections()), 100)
    window.scrollTo(0, 0)
  }, [loc])

  const currentSection = React.useMemo(
    () =>
      [...sections]
        .reverse()
        .find(section => section.posY <= scrollPos + 150) || sections[0],
    [scrollPos, sections]
  )

  return (
    <Aside>
      <NavList>
        {sections.map(section => (
          <NavItem
            key={section.posY}
            active={section === currentSection}
            className={section.type}
            onClick={() => scrollTo(section.posY - 100)}
          >
            {section.label}
          </NavItem>
        ))}
      </NavList>
    </Aside>
  )
}
