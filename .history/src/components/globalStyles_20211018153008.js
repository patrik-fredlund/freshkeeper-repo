import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;700&family=Pacifico&display=swap');
  
  .headerContainer h1 {
     font-family: 'pacifico';
  }
h2{
  font-family: 'inter';
  font-weight: 700;
}

`;

export default GlobalStyle;
