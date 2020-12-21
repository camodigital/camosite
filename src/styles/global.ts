import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Jaapokki subtract Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Jaapokki subtract Regular'), url('/fonts/jaapokki/Jaapokkisubtract-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/comforta/comfortaa-v29-latin-regular.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/comforta/comfortaa-v29-latin-700.woff2') format('woff2'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .sb-show-main.sb-main-padded{
    padding: 0 !important;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.fonts.base};
    }
  `}
`

export default GlobalStyles
