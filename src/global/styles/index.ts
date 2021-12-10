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
`;
