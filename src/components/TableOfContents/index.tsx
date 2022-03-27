import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import ScrollProgressBar from "./ScrollProgressBar";
import HeadingItem from "./HeadingItem";

export type Heading = {
  index: number;
  content: string;
  scale: number;
};

type Props = {
  article: HTMLElement;
  fixed: boolean;
};

const ELEMENT_ATTRIBUTE_KEY = "data-id";

const TableOfContents: React.FC<Props> = ({ article, fixed }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const options: IntersectionObserverInit = {
    rootMargin: "0px 0px -70% 0px",
    threshold: 1,
  };

  const callback: IntersectionObserverCallback = (elements) => {
    elements.forEach(({ target, isIntersecting }) => {
      const index = Number((target as HTMLElement).dataset.id!);

      if (isIntersecting) {
        setCurrentIndex(index);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  const registerObserver = (elements: Element[]) => {
    elements.forEach((element, index) => {
      element.setAttribute(ELEMENT_ATTRIBUTE_KEY, index.toString());
      observer.observe(element);
    });
  };

  useEffect(() => {
    const headingElements = Array.from(article.querySelectorAll("h1, h2, h3"));

    const headings: Heading[] = headingElements.map((heading, index) => ({
      index,
      content: heading.textContent ?? "",
      scale: Number(heading.tagName.charAt(1)) - 1,
    }));

    setHeadings(headings);

    registerObserver(headingElements);

    return () => observer.disconnect();
  }, [article]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <Container data-testid="table-of-contents">
      <Wrapper>
        <Box fixed={fixed}>
          <ScrollProgressBar />
          <List>
            {headings.map((heading) => (
              <HeadingItem
                key={heading.index}
                heading={heading}
                active={heading.index === currentIndex}
              />
            ))}
          </List>
        </Box>
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

const Box = styled.div<{ fixed: boolean }>`
  display: flex;

  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      top: 8rem;
    `}
`;

const List = styled.ul`
  width: 15rem;
  padding: 0.25rem 0 0.25rem 0.75rem;

  & > * + * {
    margin-top: 0.25rem;
  }
`;

export default TableOfContents;
