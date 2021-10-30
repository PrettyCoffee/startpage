import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

import { Pages } from "../../pages"
import { Aside } from "../Aside"
import { ExternalLinkIcon } from "./ExternalIcon"

const Icon = styled(FontAwesomeIcon)`
  ${({ theme: { space } }) => css`
    font-size: 1.2rem;
    margin-left: ${space.medium};
  `}
`

const Nav = styled.nav`
  ${({ theme: { space } }) => css`
    position: fixed;
    top: calc(${space.largest} * 2);
    bottom: 0;
    overflow-y: auto;
  `}
`

const NavList = styled.ul`
  text-align: end;
  padding: 0;
  margin: 0;
`

const NavItem = styled.li`
  ${({ theme: { space, color } }) => css`
    list-style: none;
    > a {
      white-space: nowrap;
      padding-right: ${space.large};
      text-decoration: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      height: calc(${space.medium} + ${space.large});
      color: ${color.fg.surface};
      transition: 0.3s cubic-bezier(0.65, -0.85, 0.35, 1.85) 0s;

      &.active {
        color: ${color.primary.fg};
        box-shadow: -${space.smallest} 0 0 ${color.fg.shade} inset;
      }

      :hover,
      :focus-visible {
        color: ${color.secondary.fg};
        padding-right: calc(${space.large} + ${space.small});
      }

      :focus-visible {
        outline: none;
        box-shadow: -${space.smallest} 0 0 ${color.fg.shade} inset;
      }
    }
  `}
`

const Divider = styled.div`
  ${({ theme: { color, space } }) => css`
    text-align: right;
    margin: ${space.large} ${space.large} ${space.small} 0;
    border-bottom: ${space.smallest} solid ${color.bg.shade};
    width: 100%;
  `}
`

export const Navigation = () => {
  const links = [
    {
      title: "github",
      icon: faGithub,
      href: "https://github.com/PrettyCoffee/startpage",
    },
    {
      title: "npm",
      icon: faNpm,
      href: "https://www.npmjs.com/org/startpage",
    },
    {
      title: "author",
      icon: faUserCircle,
      href: "https://prettycoffee.github.io/",
    },
  ]

  const Start = Pages[0]
  const Packages = Pages.slice(1)

  return (
    <Aside>
      <Nav>
        <NavList>
          <NavItem key={Start.route}>
            <NavLink activeClassName="active" to={Start.route}>
              {Start.title}
            </NavLink>
          </NavItem>
          <Divider>Packages</Divider>
          {Packages.map(({ icon, title, route }) => (
            <NavItem key={route}>
              <NavLink activeClassName="active" to={route}>
                {title}
                {icon && <Icon icon={icon} />}
              </NavLink>
            </NavItem>
          ))}
          <Divider>External Links</Divider>
          {links.map(({ href, title, icon }) => (
            <NavItem key={href}>
              <a tabIndex={0} href={href} target="_blank">
                {title}
                <ExternalLinkIcon icon={icon} />
              </a>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </Aside>
  )
}
