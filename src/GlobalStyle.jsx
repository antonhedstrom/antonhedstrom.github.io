import { createGlobalStyle, keyframes } from 'styled-components'

const gradientMove = keyframes`
  0% { background-position: 0% 94%; }
  50% { background-position: 100% 7%; }
  100% { background-position: 0% 94%; }
`

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background: radial-gradient(#1e2c31, #171A1C);
    background-size: 100% 100%;
    animation: ${gradientMove} 30s ease infinite;
    color: #30647E;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;

    /* @media(prefers-color-scheme: dark) {
      background: linear-gradient(220deg, #3d3f45, #283049);
      color: #C1C2C3;
    } */
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0.2em 0;
    padding: 0;
  }


  a {
    color: #3d9ccb;
    text-decoration: none;
  }
  a:hover { color: #1477c9; }

`

export default GlobalStyle
