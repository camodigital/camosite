import styled, { css } from 'styled-components'

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.fonts.featured};
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: ${theme.colors.textFeatured};

    -webkit-text-stroke: 0.3px ${theme.colors.textFeatured};
    -webkit-text-fill-color: transparent;

    span {
      display: block;

      -webkit-text-stroke: 0;
      -webkit-text-fill-color: ${theme.colors.textFeatured};
    }
  `}
`
