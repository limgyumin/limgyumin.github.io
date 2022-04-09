import React, { forwardRef } from "react";
import { IconType } from "react-icons";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { InputSize, InputSizeValue } from "./types";

type Props = {
  className?: string;
  size?: InputSizeValue;
  placeholder?: string;
  icon?: IconType;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const inputSizeBySizeValue: { [key in InputSize]: FlattenSimpleInterpolation } =
  {
    [InputSize.Medium]: css`
      padding: 0.4375rem 0.625rem;
      font-size: 0.75rem;
      border-radius: 6px;

      &::placeholder {
        font-size: 0.75rem;
      }
    `,
    [InputSize.Large]: css`
      padding: 0.875rem 0.9375rem;
      font-size: 1rem;
      border-radius: 6px;

      &::placeholder {
        font-size: 1rem;
      }
    `,
  };

const iconSizeBySizeValue: { [key in InputSize]: FlattenSimpleInterpolation } =
  {
    [InputSize.Medium]: css`
      font-size: 0.75rem;
    `,
    [InputSize.Large]: css`
      font-size: 1rem;
    `,
  };

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      className = "",
      size = "md",
      placeholder = "",
      icon: Icon,
      defaultValue = "",
      onChange,
    },
    ref,
  ) => {
    if (Icon) {
      return (
        <Container $size={size}>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <StyledInputElement
            data-testid="input"
            className={className}
            ref={ref}
            $size={size}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        </Container>
      );
    }

    return (
      <InputElement
        data-testid="input"
        className={className}
        ref={ref}
        $size={size}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    );
  },
);

const Container = styled.div<{ $size: InputSizeValue }>`
  position: relative;

  ${(props) => iconSizeBySizeValue[props.$size]}
`;

const InputElement = styled.input<{ $size: InputSizeValue }>`
  ${(props) => inputSizeBySizeValue[props.$size]}

  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgGray1};
  border: none;
  outline: none;
  transition: box-shadow ease 0.2s;

  &::placeholder {
    font-family: inherit;
    color: ${({ theme }) => theme.colors.ftGrayDark};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 0.625em;
  color: ${({ theme }) => theme.colors.ftGrayDark};
`;

const StyledInputElement = styled(InputElement)`
  padding-left: 2.125em;
`;

export default Input;
