import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  background-color: #fff;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  overflow: hidden;
}

h1 {
  margin: 20px 0 0;
}`

export default GlobalStyle;
