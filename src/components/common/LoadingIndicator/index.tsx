import React, { ReactElement } from "react";
import { FulfillingSquareSpinner } from "react-epic-spinners";
import styled from "styled-components";

import { theme } from "@/styles/theme";

function LoadingIndicator(): ReactElement {
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
}

const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LoadingIndicator;
