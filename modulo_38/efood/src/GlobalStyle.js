import { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: '#e66767',
  secondary: '#fff',
  tertiary: '#ffebd9',
  quaternary: '#fff8f2',
  quinary: '#000',
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
  }
`;
