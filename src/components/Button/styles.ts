import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    a {
      padding: 1rem 3rem;

      display: inline-block;

      border: 1px solid ${theme.colors.primary};
      border-radius: 0.5rem;

      text-transform: capitalize;
      color: ${theme.colors.primary};

      cursor: pointer;

      transition: 0.5s;

      &:hover {
        padding: 1rem 4rem;

        border: 1px solid ${theme.colors.secondary};

        color: ${theme.colors.secondary};
      }
    }
  `}
`
