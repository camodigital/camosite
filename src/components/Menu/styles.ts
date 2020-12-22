import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
`

export const WrapperLogo = styled.div``

export const WrapperMenuFull = styled.div``

export const NavBar = styled.div``

export const NavBarButton = styled.div`
  ${({ theme }) => css`
    width: 3rem;
    height: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    cursor: pointer;

    div {
      width: 100%;
      height: 2px;

      background-color: ${theme.colors.text};

      transition: 0.5s;

      &:nth-child(1) {
      }

      &:nth-child(2) {
        margin: 3px 0;
      }

      &:nth-child(3) {
        width: 50%;
      }
    }

    // hover
    &:hover {
      div {
        &:nth-child(3) {
          width: 100%;
        }
      }
    }

    // tablet
    ${media.greaterThan('medium')``}
  `}
`

export const CloseMenu = styled.div`
  ${({ theme }) => css`
    div {
      width: 1.5rem;
      height: 3px;

      position: absolute;
      top: 1.5rem;
      right: 1.5rem;

      background-color: ${theme.colors.text};

      cursor: pointer;

      &:nth-child(1) {
        transform: rotate(-45deg);
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
    }

    // tablet
    ${media.greaterThan('medium')``}
  `}
`

type NavBarNavProps = {
  isOpen: boolean
}

export const NavBarNav = styled.nav<NavBarNavProps>`
  ${({ theme, isOpen }) => css`
    width: 100%;
    height: 100vh;

    z-index: ${theme.layers.menu};

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    list-style: none;

    opacity: ${isOpen ? 1 : 0};

    pointer-events: ${isOpen ? 'auto' : 'none'};

    background-color: ${theme.colors.background};

    // tablet
    ${media.greaterThan('medium')``}
  `}
`

export const NavBarLinks = styled.ul`
  ${({ theme }) => css`
    height: 100%;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    list-style: none;

    font-family: ${theme.fonts.featured};
    font-size: 3rem;
    text-transform: uppercase;

    a {
      margin-bottom: 1rem;

      display: inline-block;

      text-decoration: none;
      color: ${theme.colors.primary};

      transition: 0.5s;

      &:hover {
        color: ${theme.colors.textFeatured};
      }
    }
  `}
`

export const WrapperMenu = styled.nav`
  ${({ theme }) => css`
    height: 100vh;
    padding-right: ${theme.spacings.medium};

    position: fixed;
    right: 0;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  `}
`

export const Nav = styled.ul`
  ${({ theme }) => css`
    list-style: none;

    li {
      margin-bottom: 1rem;
      padding-right: ${theme.spacings.medium};

      position: relative;

      text-align: right;

      transition: 0.5s;

      &:hover {
        /* transform: scale(1.5); */
      }

      a {
        display: inline-block;

        font-size: 1.6rem;
        color: ${theme.colors.text};
        text-decoration: none;

        transition: 0.5s;

        &::after {
          content: '';

          width: 0.8rem;
          height: 0.8rem;

          position: absolute;
          top: 0;
          right: 0;

          transform: translateY(0.8rem);

          border-radius: 50%;

          background-color: ${theme.colors.text};

          transition: 0.5s;
        }

        &:hover {
          color: ${theme.colors.primary};

          &::after {
            /* transform: translateX(-1.25rem); */

            background-color: ${theme.colors.primary};
          }
        }
      }
    }
  `}
`
