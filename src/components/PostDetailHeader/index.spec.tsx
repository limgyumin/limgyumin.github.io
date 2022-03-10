import React from "react";

import PostDetailHeader from ".";

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

describe("PostDetailHeader", () => {
  describe("컴포넌트가 렌더되면", () => {
    const postId = "post-id";

    beforeEach(() => {
      render(<PostDetailHeader />, {});

      postDetailStore.fetchPostDetail(postId);
    });

    it("글의 카테고리를 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("post-header-category")).toBeInTheDocument();
    });

    it("글의 제목을 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("post-header-title")).toBeInTheDocument();
    });

    it("글의 작성일을 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("post-header-created-at")).toBeInTheDocument();
    });
  });
});
