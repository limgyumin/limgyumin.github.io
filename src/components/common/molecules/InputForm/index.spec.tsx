import React from "react";

import InputForm from ".";

import Input from "../../atoms/Input";
import { render, screen, fireEvent } from "@/testing-utils";

const mockOnSubmit = jest.fn();

const renderComponent = () => {
  const input = (ref: React.MutableRefObject<HTMLInputElement | null>) => (
    <Input ref={ref} />
  );

  render(<InputForm onSubmit={mockOnSubmit} input={input} />);
};

describe("InputForm", () => {
  describe("공백을 입력하고", () => {
    beforeEach(() => {
      renderComponent();

      const input = screen.getByTestId("input") as HTMLInputElement;
      const value: string = "";

      fireEvent.change(input, { target: { value } });
    });

    describe("Enter키를 누르면", () => {
      beforeEach(() => {
        const input = screen.getByTestId("input") as HTMLInputElement;

        fireEvent.submit(input);
      });

      it("게시글을 검색하지 않아야 한다.", () => {
        expect(mockOnSubmit).not.toBeCalled();
      });
    });
  });

  describe("검색어를 입력하고", () => {
    beforeEach(() => {
      renderComponent();

      const input = screen.getByTestId("input") as HTMLInputElement;
      const value: string = "Lorem ipsum";

      fireEvent.change(input, { target: { value } });
    });

    describe("Enter키를 누르면", () => {
      beforeEach(() => {
        const input = screen.getByTestId("input") as HTMLInputElement;

        fireEvent.submit(input);
      });

      it("게시글을 검색해야 한다.", () => {
        expect(mockOnSubmit).toBeCalled();
      });
    });
  });
});
