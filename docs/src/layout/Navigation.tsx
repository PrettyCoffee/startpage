import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faUserCircle,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

import { Pages } from "../pages"

const Icon = styled(FontAwesomeIcon)`
  ${({ theme: { space } }) => css`
    font-size: ${space.large};
  `}
`

const StyledLink = styled.a<Pick<IconButtonProps, "active">>`
  ${({ theme: { space, color }, active }) => css`
    position: relative;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: calc(${space.large} * 3);
    width: calc(${space.large} * 3);
    color: ${color.fg.surface};
    transition: 0.3s cubic-bezier(0.65, -0.85, 0.35, 1.85) 0s;
    transform: translateY(${space.smallest});

    :hover,
    :focus-visible {
      color: ${color.palette.red};
      transform: translateY(-${space.smallest});
    }

    :focus-visible {
      outline: none;
      box-shadow: 0 -${space.smallest} 0 ${color.fg.shade} inset;
    }

    ${active &&
    css`
      color: ${color.palette.blue};
      box-shadow: 0 -${space.smallest} 0 ${color.fg.shade} inset;
      transform: translateY(-${space.smallest});
    `}
  `}
`

const StyledRouterLink = styled(NavLink)`
  ${({ theme: { space, color } }) => css`
    position: relative;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: calc(${space.large} * 3);
    width: calc(${space.large} * 3);
    color: ${color.fg.surface};
    transition: 0.3s cubic-bezier(0.65, -0.85, 0.35, 1.85) 0s;
    transform: translateY(${space.smallest});

    :hover,
    :focus-visible {
      color: ${color.palette.red};
      transform: translateY(-${space.smallest});
    }

    &.active {
      color: ${color.palette.blue};
      box-shadow: 0 -${space.smallest} 0 ${color.fg.shade} inset;
      transform: translateY(-${space.smallest});
    }

    :focus-visible {
      outline: none;
      color: ${color.palette.red};
      transform: translateY(-${space.smallest});
      box-shadow: 0 -${space.smallest} 0 ${color.fg.shade} inset;
    }
  `}
`

const ExternalIcon = styled(FontAwesomeIcon)`
  ${({ theme: { space } }) => css`
    position: absolute;
    font-size: calc(${space.large} / 2);
    right: ${space.medium};
    bottom: ${space.medium};
  `}
`

type IconButtonProps = {
  icon: IconProp
  href?: string
  onClick?: () => void
  active?: boolean
}

const IconLink = ({ icon, href, ...linkProps }: IconButtonProps) => (
  <StyledLink
    tabIndex={0}
    href={href || "javascript:void(0);"}
    target={href ? "_blank" : "_self"}
    {...linkProps}
  >
    <Icon icon={icon} />
    {href && <ExternalIcon icon={faExternalLinkAlt} />}
  </StyledLink>
)

export const Navigation = () => {
  const links = [
    { icon: faGithub, href: "https://github.com/PrettyCoffee/react-startpage" },
    { icon: faUserCircle, href: "https://prettycoffee.github.io/" },
  ]

  return (
    <div>
      {Pages.map(({ icon, route }) => (
        <StyledRouterLink activeClassName="active" key={route} to={route}>
          <Icon icon={icon} />
        </StyledRouterLink>
      ))}
      {links.map(link => (
        <IconLink key={link.href} {...link} />
      ))}
    </div>
  )
}
