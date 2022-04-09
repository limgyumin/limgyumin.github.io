import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";

import Logo from "./Logo";
import InputForm from "../common/molecules/InputForm";
import Input from "../common/atoms/Input";
import useQueryString from "@/hooks/utils/useQueryString";
import { SEARCH_KEYWORD_KEY } from "@/constants/search";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const getQueryString = useQueryString();

  const handleSubmit = (value: string) =>
    navigate(`/search?${SEARCH_KEYWORD_KEY}=${value}`);

  const keyword = getQueryString(SEARCH_KEYWORD_KEY)!;

  const inputComponent = (
    ref: React.MutableRefObject<HTMLInputElement | null>,
  ) => (
    <StyleInput
      className="header-input"
      ref={ref}
      placeholder="찾으시는 글이 있으신가요?"
      defaultValue={keyword}
      icon={RiSearchLine}
    />
  );

  return (
    <Container>
      <Content>
        <StyledLink data-testid="header-logo" to="/">
          <Logo />
        </StyledLink>

        <InputForm onSubmit={handleSubmit} input={inputComponent} />
      </Content>
    </Container>
  );
};

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgHeader};
  backdrop-filter: saturate(200%) blur(10px);
  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.boxShadowLight};
`;

const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const StyledLink = styled(Link)`
  line-height: 0;

  & > svg {
    width: 5.5rem;
    height: auto;
  }
`;

const StyleInput = styled(Input)`
  width: 12rem;

  &:focus {
    box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  }
`;

export default Header;
