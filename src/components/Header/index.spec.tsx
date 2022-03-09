import React from "react";
import { MemoryRouter } from "react-router-dom";

import Header from ".";
import { screen, render } from "@/testing-utils";

describe("Header", () => {
  describe("컴포넌트가 렌더되면", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
        {},
      );
    });

    it("Logo를 확인할 수 있다.", () => {
      expect(screen.getByTestId("header-logo")).toBeInTheDocument();
    });

    describe("Logo를 클릭했을 때", () => {
      let logo: HTMLAnchorElement;

      beforeEach(() => {
        logo = screen.getByTestId("header-logo");
      });

      it("Main 페이지로 이동할 수 있어야 한다.", () => {
        expect(logo).toHaveAttribute("href", expect.stringMatching("/"));
      });
    });
  });
});
