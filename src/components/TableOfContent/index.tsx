import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import HeadingItem from "./HeadingItem";

import useFixed from "@/hooks/utils/useFixed";

export type Heading = {
  index: number;
  content: string;
  scale: number;
};

type Props = {
  articleRef: React.MutableRefObject<HTMLElement | null>;
};

const TableOfContent: React.FC<Props> = ({ articleRef }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState<number>(0);

  const fixed = useFixed(300);

  useEffect(() => {
    if (articleRef.current === null) return;

    const headingElements = articleRef.current.querySelectorAll("h1, h2, h3");

    const headings: Heading[] = Array.from(headingElements).map(
      (heading, index) => ({
        index,
        content: heading.textContent || "",
        scale: Number(heading.tagName.charAt(1)) - 1,
      }),
    );

    setHeadings(headings);

    const options: IntersectionObserverInit = {
      rootMargin: "0px 0px -70% 0px",
      threshold: 1,
    };

    const callback: IntersectionObserverCallback = (elements) => {
      elements.forEach(({ target, isIntersecting }) => {
        const index = Number((target as HTMLElement).dataset.id!);

        if (isIntersecting) {
          setCurrentHeadingIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    headingElements.forEach((heading, index) => {
      heading.setAttribute("data-id", index.toString());
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  if (!headings.length) {
    return null;
  }

  return (
    <Container>
      <Wrapper>
        <List fixed={fixed}>
          {headings.map((heading) => (
            <HeadingItem
              key={heading.index}
              heading={heading}
              active={heading.index === currentHeadingIndex}
            />
          ))}
        </List>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 100%;
`;

const List = styled.ul<{ fixed: boolean }>`
  width: 15rem;
  margin-left: 3rem;
  padding: 0.25rem 0 0.25rem 0.75rem;
  border-left: 2px solid ${({ theme }) => theme.colors.bdGrayDark};

  & > * + * {
    margin-top: 0.25rem;
  }

  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      top: 9.75rem;
    `}
`;

export default TableOfContent;
