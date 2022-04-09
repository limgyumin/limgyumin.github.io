import React from "react";

import Input from ".";

import { render, screen, fireEvent } from "@/testing-utils";

describe("Input", () => {
  describe("컴포넌트가 렌더되면", () => {
    beforeEach(() => {
      render(<Input />);
    });

    it("입력란을 확인할 수 있어야 한다.", () => {
      expect(screen.getByTestId("input")).toBeInTheDocument();
    });
  });

  describe("입력란에 값을 입력하면", () => {
    let input: HTMLInputElement;
    const value: string = "Lorem ipsum";

    beforeEach(() => {
      render(<Input />);

      input = screen.getByTestId("input") as HTMLInputElement;

      fireEvent.change(input, { target: { value } });
    });

    it("값이 입력되어야 한다.", () => {
      expect(input.value).toBe(value);
    });
  });
});
