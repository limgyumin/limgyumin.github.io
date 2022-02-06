import React from "react";

import PostList from ".";
import postStore from "@/stores/postStore";
import { render, screen, waitFor } from "@/testing-utils";
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
  describe("글 목록이 조회되면", () => {
    beforeEach(() => {
      render(<PostList />, {});

      postStore.fetchPosts();
    });

    it("글 목록 컴포넌트가 렌더되어야 한다.", async () => {
      await waitFor(() => {
        expect(screen.getByTestId("post-list")).toBeInTheDocument();
      });
    });
  });
});
