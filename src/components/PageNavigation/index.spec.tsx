import React from "react";

import PageNavigation from ".";
import { render, screen, fireEvent, act } from "@/testing-utils";
import postFactory from "@/testing-utils/Factory/PostFactory";
import postStore from "@/stores/postStore";
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

async function renderComponent(): Promise<void> {
  render(<PageNavigation />, {});

  await postStore.fetchPosts();
}

describe("PageNavigation", () => {
  describe("컴포넌트가 렌더되면", () => {
    beforeEach(async () => {
      await renderComponent();
    });

    it("페이지 네비게이션을 확인할 수 있다.", () => {
      expect(screen.getByTestId("page-navigation")).toBeInTheDocument();
    });
  });

  describe("글 목록의 이전 페이지가 존재하면", () => {
    beforeEach(async () => {
      await renderComponent();
      postStore.setPage(2);
    });

    describe("이전 페이지 버튼을 클릭했을 때", () => {
      it("페이지가 감소해야 한다.", () => {
        act(() => {
          fireEvent.click(screen.getByTestId("page-navigation-prev-btn"));
        });

        expect(postStore.page).toBe(1);
      });
    });
  });

  describe("글 목록의 다음 페이지가 존재하면", () => {
    beforeEach(async () => {
      await renderComponent();
      postStore.setPage(2);
    });

    describe("다음 페이지 버튼을 클릭했을 때", () => {
      it("페이지가 증가해야 한다.", () => {
        act(() => {
          fireEvent.click(screen.getByTestId("page-navigation-next-btn"));
        });

        expect(postStore.page).toBe(3);
      });
    });
  });

  describe("글 목록의 이전 페이지가 존재하지 않으면", () => {
    beforeEach(async () => {
      await renderComponent();
      postStore.setPage(0);
    });

    describe("이전 페이지 버튼을 클릭했을 때", () => {
      it("페이지가 감소하지 않아야 한다.", () => {
        act(() => {
          fireEvent.click(screen.getByTestId("page-navigation-prev-btn"));
        });

        expect(postStore.page).toBe(0);
      });
    });
  });
});
