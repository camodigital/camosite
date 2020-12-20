import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WrapperLogo = styled.div``

export const WrapperMenu = styled.div``

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
  `}
`
