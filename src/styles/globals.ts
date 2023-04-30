import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Sofia Pro';
    src: local('Sofia Pro'), url(./fonts/SourceSansPro-Regular.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Sofia Pro';
    src: local('Sofia Pro'), url(./fonts/SourceSansPro-Bold.ttf) format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src: local('Sofia Pro'), url(./fonts/SourceSansPro-SemiBold.ttf) format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src: local('Sofia Pro'), url(./fonts/SourceSansPro-Light.ttf) format('truetype');
    font-weight: 100;
  }

  html, body {
    height: 100%;
    margin: 0;
    color-scheme: "light";
    font-family: 'Sofia Pro', sans-serif;
  } 
`;
