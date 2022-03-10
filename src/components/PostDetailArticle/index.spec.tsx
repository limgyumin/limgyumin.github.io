import React from "react";

import PostDetailArticle from ".";

import { render, screen } from "@/testing-utils";
import postDetailFactory from "@/testing-utils/Factory/PostDetailFactory";
import postDetailStore from "@/stores/postDetailStore";

const mockPost = postDetailFactory.build();

jest.mock("@/repositories/postRepository", () =>
  jest.fn().mockImplementation(() => ({
    fetchPostDetail() {
      return mockPost;
    },
  })),
);

describe("PostDetailArticle", () => {
  describe("컴포넌트가 렌더되면", () => {
    const postId = "post-id";

    beforeEach(() => {
      render(<PostDetailArticle />, {});

      postDetailStore.fetchPostDetail(postId);
    });

    it("글의 본문을 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("markdown")).toBeInTheDocument();
    });
  });
});
