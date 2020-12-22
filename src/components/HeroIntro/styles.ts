import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
`

export const Header = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    .title {
      margin-bottom: ${theme.spacings.small};
    }
    .text {
      margin-bottom: ${theme.spacings.small};
    }
    .button {
    }
  `}
`

export const Footer = styled.div`
  width: 100%;
  padding: 1rem;

  position: absolute;
  left: 0;
  bottom: 0;

  text-align: center;
`
