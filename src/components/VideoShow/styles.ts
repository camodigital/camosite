import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.background};

    .button {
      position: absolute;
      top: 1.5rem;
      left: 1.5rem;

      font-size: 2rem;

      a {
        text-decoration: none;
        color: ${theme.colors.text};

        transition: 0.5s;

        &:hover {
          color: ${theme.colors.primary};
        }
      }
    }

    .title {
      width: 70%;
      margin-bottom: 1.5rem;

      font-family: ${theme.fonts.featured};
      text-transform: uppercase;
      font-size: 2rem;
    }

    .container {
      width: 70%;

      .video {
        overflow: hidden;
        position: relative;
        width: 100%;

        &::after {
          padding-top: 56.25%;
          display: block;
          content: '';
        }
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  `}
`
