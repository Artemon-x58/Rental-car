import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #fff;
    width: 100%;
  height: 100vh; };
  h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
  ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
};
a {
  color: currentColor;
  text-decoration: none;
  outline: transparent;
};
button {
  font-family: inherit;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: transparent;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

export const Container = styled.div`
  padding-top: 50px;
  padding-left: 128px;
  padding-right: 128px;
  max-width: 1440px;
  margin: 0 auto 100px;
`;
