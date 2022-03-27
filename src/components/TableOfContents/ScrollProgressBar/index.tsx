import React, { useEffect, useState } from "react";
import styled from "styled-components";

const getScrollProgress = (): number => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  return Math.floor((scrollTop / (scrollHeight - clientHeight)) * 100);
};

const ScrollProgressBar: React.FC = () => {
  const [height, setHeight] = useState<number>(getScrollProgress());

  const scrollEventHandler = () => setHeight(getScrollProgress());

  useEffect(() => {
    window.addEventListener("scroll", scrollEventHandler);

    return () => window.removeEventListener("scroll", scrollEventHandler);
  });

  return (
    <Container>
      <Progress $height={height} />
    </Container>
  );
};

const Container = styled.div`
  margin-left: 3rem;
  width: 3px;
  background-color: ${({ theme }) => theme.colors.bdGrayDark};
`;

const Progress = styled.div<{ $height: number }>`
  width: inherit;
  height: ${(props) => props.$height}%;
  background-color: ${({ theme }) => theme.colors.bgBlack};
`;

export default ScrollProgressBar;
