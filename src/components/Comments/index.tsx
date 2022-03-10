import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const utterancesSettings = {
  src: "https://utteranc.es/client.js",
  repo: "limgyumin/blog-v2",
  "issue-term": "pathname",
  label: "utterances",
  theme: "github-light",
  crossorigin: "anonymous",
  async: "true",
};

const Comments: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current == null) return;

    const utterances = document.createElement("script");

    Object.entries(utterancesSettings).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    ref.current.appendChild(utterances);
  }, []);

  return <Container ref={ref} data-testid="comments" />;
};

const Container = styled.section`
  margin-top: 3rem;
`;

export default Comments;
