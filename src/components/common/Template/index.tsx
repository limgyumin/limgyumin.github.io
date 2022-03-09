import React, { ElementType, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  as?: ElementType;
  width?: string;
  children: ReactNode;
};

const Template: React.FC<Props> = ({
  as = "section",
  width = "900px",
  children,
}) => {
  return (
    <Container as={as}>
      <Wrapper $width={width}>{children}</Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div<{ $width: string }>`
  max-width: ${(props) => props.$width};
  width: inherit;
  padding: 6rem 1rem 4rem;
`;

export default Template;
