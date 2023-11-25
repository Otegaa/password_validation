import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: 'Kumbh Sans', sans-serif;
  color: #374151;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  font-weight: 400;
}
`;

export default GlobalStyles;
