import React from "react";
import { MemoryRouter } from "react-router-dom";
import faker from "faker";

import HeadingItem from ".";
import { Heading } from "..";

import { render, screen } from "@/testing-utils";
import StringUtil from "@/utils/string";

describe("HeadingItem", () => {
  describe("컴포넌트가 렌더되면", () => {
    const heading: Heading = {
      index: faker.datatype.number(10),
      content: faker.lorem.sentence(),
      scale: faker.datatype.number(4),
    };
    const active: boolean = false;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <HeadingItem heading={heading} active={active} />
        </MemoryRouter>,
        {},
      );
    });

    it("목차의 아이템을 볼 수 있어야 한다.", () => {
      expect(screen.getByTestId("heading-item")).toBeInTheDocument();
    });

    describe("목차의 아이템을 클릭했을 때", () => {
      let item: HTMLAnchorElement;

      const id = new StringUtil(heading.content)
        .space2Hyphen()
        .removeSpecialSymbols()
        .get();

      beforeEach(() => {
        item = screen.getByTestId("heading-item");
      });

      it("해당 목차 아이템으로 이동되어야 한다.", () => {
        expect(item).toHaveAttribute("href", expect.stringContaining(`#${id}`));
      });
    });
  });
});
