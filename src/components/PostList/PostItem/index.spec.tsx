import React from "react";

import PostItem from ".";
import { render, screen } from "@/testing-utils";
import postFactory from "@/testing-utils/Factory/PostFactory";

describe("PostItem", () => {
  describe("컴포넌트가 렌더되면", () => {
    beforeEach(() => {
      const post = postFactory.build();

      render(<PostItem post={post} />, {});
    });

    it("제목을 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("post-category")).toBeInTheDocument();
    });

    it("설명을 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("post-description")).toBeInTheDocument();
    });

    it("카테고리를 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("post-category")).toBeInTheDocument();
    });

    it("작성일을 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("post-date")).toBeInTheDocument();
    });
  });
});
