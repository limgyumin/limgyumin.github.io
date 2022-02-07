import React from "react";

import PostList from ".";
import postStore from "@/stores/postStore";
import { render, screen } from "@/testing-utils";
import postFactory from "@/testing-utils/Factory/PostFactory";

const mockPosts = postFactory.buildList(5);

jest.mock("@/repositories/postRepository", () =>
  jest.fn().mockImplementation(() => ({
    fetchPosts() {
      return mockPosts;
    },
  })),
);

describe("PostList", () => {
  describe("컴포넌트가 렌더되면", () => {
    beforeEach(() => {
      render(<PostList />, {});

      postStore.fetchPosts();
    });

    it("글 목록을 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("post-list")).toBeInTheDocument();
    });
  });
});
