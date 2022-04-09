import React, { useRef } from "react";
import styled from "styled-components";

type Props = {
  input: (
    ref: React.MutableRefObject<HTMLInputElement | null>,
  ) => React.ReactElement;
  onSubmit: (value: string) => void;
};

const InputForm: React.FC<Props> = ({ input, onSubmit }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current === null) return;

    const value = inputRef.current.value.trim();

    if (value === "") return;

    onSubmit(value);
  };

  return <Container onSubmit={handleSubmit}>{input(inputRef)}</Container>;
};

const Container = styled.form``;

export default InputForm;
