import { createGlobalStyle } from 'styled-components';
import './font.scss';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
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
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;