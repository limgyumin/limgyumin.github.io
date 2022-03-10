import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "@/components/App";

import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
);
