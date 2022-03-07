import { createGlobalStyle } from 'styled-components';
import './font.scss';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
     background: ${({ theme }) => theme.body};
  }
  
  body,
  a,
  button {
    font-family: 'Nunito Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }
  
  img {
    display: block;
    max-width: 100%;
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;