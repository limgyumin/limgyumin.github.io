import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";

import { theme } from "@/styles/theme";

type Props = {
  children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Provider, ...options });

export * from "@testing-library/react";

export { customRender as render };
