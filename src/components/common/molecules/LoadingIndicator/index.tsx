import React from "react";
import { FulfillingSquareSpinner } from "react-epic-spinners";
import styled from "styled-components";

import { theme } from "@/styles/theme";

const LoadingIndicator: React.FC = () => {
  const color = theme.colors.bgBlack;

  return (
    <Container>
      <FulfillingSquareSpinner
        size={48}
        color={color}
        animationDuration={2500}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LoadingIndicator;
