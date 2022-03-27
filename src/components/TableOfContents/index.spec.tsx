import React from "react";
import { MemoryRouter } from "react-router-dom";
import faker from "faker";

import TableOfContents from ".";

import { render, screen } from "@/testing-utils";

const mockIntersectionObserver = () => ({
  observe: () => null,
  disconnect: () => null,
});

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(mockIntersectionObserver);

const createElement = (htmlString: string): HTMLElement => {
  const template = document.createElement("template");

  template.innerHTML = htmlString;

  return template.content.firstElementChild! as HTMLElement;
};

describe("TableOfContents", () => {
  describe("글 본문에 Heading을 포함하고 있으면", () => {
    const article = createElement(`
      <article>
        <h1>${faker.lorem.sentence()}</h1>
      </article>
    `);
    const fixed: boolean = true;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <TableOfContents article={article} fixed={fixed} />
        </MemoryRouter>,
        {},
      );
    });

    it("글의 목차가 렌더되어야 한다.", () => {
      expect(screen.getByTestId("table-of-contents")).toBeInTheDocument();
    });
  });

  describe("글 본문에 Heading을 포함하고 있지 않으면", () => {
    const article = createElement(`
      <article></article>
    `);
    const fixed: boolean = true;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <TableOfContents article={article} fixed={fixed} />
        </MemoryRouter>,
        {},
      );
    });

    it("글의 목차가 렌더되지 않아야 한다.", () => {
      expect(screen.queryByTestId("table-of-contents")).not.toBeInTheDocument();
    });
  });
});
