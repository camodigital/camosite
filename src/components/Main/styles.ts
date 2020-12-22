import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `}
`
