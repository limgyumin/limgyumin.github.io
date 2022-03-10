import React from "react";

import Comments from ".";

import { render, screen } from "@/testing-utils";

describe("Comments", () => {
  describe("컴포넌트가 렌더되면", () => {
    beforeEach(() => {
      render(<Comments />, {});
    });

    it("댓글 목록을 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("comments")).toBeInTheDocument();
    });
  });
});
