import React from "react";

import Markdown from ".";

import { render } from "@/testing-utils";

const renderComponent = (children: string): HTMLElement => {
  const { container } = render(<Markdown>{children}</Markdown>, {});

  return container;
};

describe("Markdown", () => {
  describe("텍스트에 h1 헤더가 포함되어 있으면", () => {
    const children = "# Lorem ipsum";

    let container: HTMLElement;

    beforeEach(() => {
      container = renderComponent(children);
    });

    it("h1 요소가 렌더되어야 한다.", () => {
      expect(container.querySelector("h1")).toBeInTheDocument();
    });
  });

  describe("텍스트에 h2 헤더가 포함되어 있으면", () => {
    const children = "## Lorem ipsum";

    let container: HTMLElement;

    beforeEach(() => {
      container = renderComponent(children);
    });

    it("h2 요소가 렌더되어야 한다.", () => {
      expect(container.querySelector("h2")).toBeInTheDocument();
    });
  });

  describe("텍스트에 h3 헤더가 포함되어 있으면", () => {
    const children = "### Lorem ipsum";

    let container: HTMLElement;

    beforeEach(() => {
      container = renderComponent(children);
    });

    it("h3 요소가 렌더되어야 한다.", () => {
      expect(container.querySelector("h3")).toBeInTheDocument();
    });
  });

  describe("텍스트에 h4 헤더가 포함되어 있으면", () => {
    const children = "#### Lorem ipsum";

    let container: HTMLElement;

    beforeEach(() => {
      container = renderComponent(children);
    });

    it("h4 요소가 렌더되어야 한다.", () => {
      expect(container.querySelector("h4")).toBeInTheDocument();
    });
  });

  describe("텍스트에 h5 헤더가 포함되어 있으면", () => {
    const children = "##### Lorem ipsum";

    let container: HTMLElement;

    beforeEach(() => {
      container = renderComponent(children);
    });

    it("h5 요소가 렌더되어야 한다.", () => {
      expect(container.querySelector("h5")).toBeInTheDocument();
    });
  });

  describe("텍스트에 h6 헤더가 포함되어 있으면", () => {
    const children = "###### Lorem ipsum";

    let container: HTMLElement;

    beforeEach(() => {
      container = renderComponent(children);
    });

    it("h6 요소가 렌더되어야 한다.", () => {
      expect(container.querySelector("h6")).toBeInTheDocument();
    });
  });

  describe("텍스트에 anchor가 포함되어 있으면", () => {
    const children = "[Lorem ipsum]()";

    let container: HTMLElement;

    beforeEach(() => {
      container = renderComponent(children);
    });

    it("anchor 요소가 렌더되어야 한다.", () => {
      expect(container.querySelector("a")).toBeInTheDocument();
    });
  });

  describe("텍스트에 codeblock이 포함되어 있으면", () => {
    const children = "`Lorem ipsum`";

    let container: HTMLElement;

    beforeEach(() => {
      container = renderComponent(children);
    });

    it("codeblock 요소가 렌더되어야 한다.", () => {
      expect(container.querySelector("code")).toBeInTheDocument();
    });
  });
});
