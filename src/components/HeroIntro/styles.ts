import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1.5rem;

  position: relative;

  ${media.greaterThan('medium')`
    padding: 3rem;
  `}
`

export const Header = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
    }

    .title {
      margin-bottom: ${theme.spacings.small};

      text-align: center;
    }

    .text {
      width: 100%;
      max-width: 250px;
      margin: 0 auto;
      margin-bottom: ${theme.spacings.small};
    }

    .button {
      display: none;
    }

    ${media.greaterThan('medium')`
      display: grid;
	    grid-template-columns: 30% 70%;
      grid-template-rows: 1fr;

      .logo{
        order: 2;
      }

      .WrapperContent{
        order: 1;

        .title{
          text-align: left;
        }

        .text{
          margin: 0;

          text-align: left;
        }
      }
    `}

    ${media.greaterThan('large')`
      display: grid;
	    grid-template-columns: 30% 55% 15%;
      grid-template-rows: 1fr;

      .logo{
        order: 2;
      }

      .WrapperContent{
        order: 1;

        .title{
          text-align: left;
        }

        .text{
          max-width: none;
          margin: 0;

          text-align: left;
        }
      }
    `}
  `}
`

export const Footer = styled.div`
  width: 100%;
  padding: 1rem;

  position: absolute;
  left: 0;
  bottom: 0;

  display: none;

  text-align: center;
`
