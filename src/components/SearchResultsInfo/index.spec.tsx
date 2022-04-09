import React from "react";
import { MemoryRouter } from "react-router-dom";

import SearchResultsInfo from ".";

import { render, screen } from "@/testing-utils";

describe("SearchResultsInfo", () => {
  describe("컴포넌트가 렌더되면", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <SearchResultsInfo />
        </MemoryRouter>,
        {},
      );
    });

    it("검색 정보를 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("search-results-info")).toBeInTheDocument();
    });
  });
});
