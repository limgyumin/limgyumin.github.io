import React from "react";
import { MemoryRouter } from "react-router-dom";

import PostList from ".";

import { render, screen } from "@/testing-utils";
import postFactory from "@/testing-utils/Factory/PostFactory";

import { POST_COUNT_PER_FETCH } from "@/constants/post";

const mockPosts = postFactory.buildList(POST_COUNT_PER_FETCH);

describe("PostList", () => {
  describe("컴포넌트가 렌더되면", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <PostList posts={mockPosts} />
        </MemoryRouter>,
        {},
      );
    });

    it("글 목록을 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("post-list")).toBeInTheDocument();
    });
  });
});
