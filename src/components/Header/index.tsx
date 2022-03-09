import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <StyledLink data-testid="header-logo" to="/">
          <Logo />
        </StyledLink>
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
  max-width: 900px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const StyledLink = styled(Link)`
  line-height: 0;

  & > svg {
    width: 5.5rem;
    height: auto;
  }
`;

export default Header;
