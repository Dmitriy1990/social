import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
}

body{
    font-family: 'Roboto', sans-serif;
    color: #000;
}

img{
    max-width: 100%;
}

a{
    text-decoration: none;
}

`;
