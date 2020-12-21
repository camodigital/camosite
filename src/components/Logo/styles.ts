import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-family: ${theme.fonts.featured};
    font-size: 1rem;
    line-height: 1rem;

    ${media.greaterThan('medium')`
      font-size: 1.6rem;
      line-height: 1.6rem;
    `}
  `}
`

import { LogoProps } from '.'

export const Link = styled.a<LogoProps>`
  ${({ theme, color }) => css`
    display: inline-block;

    color: ${theme.colors[color!]};
    text-decoration: none;

    transition: 0.5s;

    &:hover {
      color: ${color === 'primary'
        ? theme.colors.secondary
        : theme.colors.primary};
    }
  `}
`
