import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import "./fonts.css";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    line-height: 1.4;
    font-family: 'Interop';
  }

  #root {
    height: 100%;
  }
`;
