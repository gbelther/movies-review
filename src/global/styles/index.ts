import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('../fonts/Roboto/roboto-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('../fonts/Roboto/roboto-v29-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('../fonts/Roboto/roboto-v29-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Roboto';
  }

  html {
        @media (max-width: 1280px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }

        color: ${({ theme }) => theme.colors.primary};
    }

    body, input, textarea, button {
        font-family: ${({ theme }) => theme.fontFamily.roboto};
        font-weight: 400;
    }

    body {
      background: ${({ theme }) => theme.colors.background}
    }

    button {
        cursor: pointer;
        transition: 0.3s;

        :hover {
          filter: brightness(0.8);
        }
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
