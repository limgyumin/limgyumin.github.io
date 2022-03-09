import React from "react";
import { MemoryRouter } from "react-router-dom";

import PostList from ".";
import postStore from "@/stores/postStore";

import { render, screen } from "@/testing-utils";
import postFactory from "@/testing-utils/Factory/PostFactory";

import { POST_COUNT_PER_FETCH } from "@/constants/post";

const mockTotal = 5 * POST_COUNT_PER_FETCH;
const mockPosts = postFactory.buildList(POST_COUNT_PER_FETCH);

jest.mock("@/repositories/postRepository", () =>
  jest.fn().mockImplementation(() => ({
    fetchPosts() {
      return { posts: mockPosts, total: mockTotal };
    },
  })),
);

describe("PostList", () => {
  describe("컴포넌트가 렌더되면", () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <PostList />
        </MemoryRouter>,
        {},
      );

      postStore.fetchPosts();
    });

    it("글 목록을 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("post-list")).toBeInTheDocument();
    });
  });
});
