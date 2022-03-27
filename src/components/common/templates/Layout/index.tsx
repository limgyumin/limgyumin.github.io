import React, { ElementType, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  as?: ElementType;
  width?: string;
  children: ReactNode;
};

const Layout: React.FC<Props> = ({
  as = "main",
  width = "700px",
  children,
}) => {
  return (
    <Container>
      <Wrapper as={as} $width={width}>
        {children}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.main<{ $width: string }>`
  max-width: ${(props) => props.$width};
  width: inherit;
  padding: 8rem 1rem 4rem;

  ${({ theme }) => theme.medias.tablet} {
    padding: 6rem 1rem 4rem;
  }
`;

export default Layout;
