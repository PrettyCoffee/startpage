import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

import { Pages } from "../../pages"
import { ExternalLinkIcon } from "./ExternalIcon"

const Icon = styled(FontAwesomeIcon)`
  ${({ theme: { space } }) => css`
    font-size: 1.2rem;
    margin-left: ${space.medium};
  `}
`

const Wrapper = styled.aside`
  ${({ theme: { space } }) => css`
    grid-area: sidenav;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: calc(${space.large} * 3);
  `}
`

const NavList = styled.ul`
  ${({ theme: { space } }) => css`
    position: sticky;
    top: calc(${space.largest} * 2);
    text-align: end;
    padding: 0;
  `}
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
      height: ${space.largest};
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
        color: ${color.secondary.fg};
        padding-right: calc(${space.large} + ${space.small});
        box-shadow: -${space.smallest} 0 0 ${color.fg.shade} inset;
      }
    }
  `}
`

export const Navigation = () => {
  const links = [
    {
      title: "github",
      icon: faGithub,
      href: "https://github.com/PrettyCoffee/react-startpage",
    },
    {
      title: "author",
      icon: faUserCircle,
      href: "https://prettycoffee.github.io/",
    },
  ]

  return (
    <Wrapper>
      <NavList>
        {Pages.map(({ icon, route, title }) => (
          <NavItem key={route}>
            <NavLink activeClassName="active" key={route} to={route}>
              {title}
              <Icon icon={icon} />
            </NavLink>
          </NavItem>
        ))}
        {links.map(({ href, title, icon }) => (
          <NavItem key={href}>
            <a tabIndex={0} href={href} target="_blank">
              {title}
              <ExternalLinkIcon icon={icon} />
            </a>
          </NavItem>
        ))}
      </NavList>
    </Wrapper>
  )
}
