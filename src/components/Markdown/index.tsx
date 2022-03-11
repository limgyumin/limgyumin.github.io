import React, { forwardRef } from "react";
import MarkDown2JSX from "markdown-to-jsx";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { removeSpecialSymbols, space2Hyphen } from "@/utils/string";

type Props = {
  children: string;
};

const string2Id = (str: string) =>
  space2Hyphen(removeSpecialSymbols(str)).trim();

const CustomH1 = ({ children }: { children: string }): JSX.Element => {
  return <h1 id={string2Id(children.toString())}>{children}</h1>;
};

const CustomH2 = ({ children }: { children: string }): JSX.Element => {
  return <h2 id={string2Id(children.toString())}>{children}</h2>;
};

const CustomH3 = ({ children }: { children: string }): JSX.Element => {
  return <h3 id={string2Id(children.toString())}>{children}</h3>;
};

const CustomH4 = ({ children }: { children: string }): JSX.Element => {
  return <h4 id={string2Id(children.toString())}>{children}</h4>;
};

const CustomH5 = ({ children }: { children: string }): JSX.Element => {
  return <h5 id={string2Id(children.toString())}>{children}</h5>;
};

const CustomH6 = ({ children }: { children: string }): JSX.Element => {
  return <h6 id={string2Id(children.toString())}>{children}</h6>;
};

const CustomAnchor = ({
  children,
  ...props
}: {
  children: string;
}): JSX.Element => {
  return (
    <a {...props} target="_blank">
      {children}
    </a>
  );
};

const CustomCodeblock = ({
  children,
  className,
  ...props
}: {
  children: string;
  className: string;
}): JSX.Element => {
  const match = /lang-(\w+)/.exec(className || "");

  if (!match) {
    return <code {...props}>{children}</code>;
  }

  return (
    <SyntaxHighlighter
      language={match[1]}
      PreTag="div"
      style={prism}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  );
};

const MarkDown = forwardRef<HTMLElement, Props>(({ children }, ref) => {
  return (
    <Container ref={ref} data-testid="markdown">
      <MarkDown2JSX
        options={{
          overrides: {
            h1: CustomH1,
            h2: CustomH2,
            h3: CustomH3,
            h4: CustomH4,
            h5: CustomH5,
            h6: CustomH6,
            a: CustomAnchor,
            code: CustomCodeblock,
          },
          forceBlock: true,
        }}
      >
        {children}
      </MarkDown2JSX>
    </Container>
  );
});

const Container = styled.section`
  font-size: 1.125rem;
  font-weight: 400;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.ftBlack};
  word-break: keep-all;
  overflow-wrap: break-word;

  ${({ theme }) => theme.medias.tablet} {
    font-size: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.ftGrayDark2};
    padding: 0.75rem 0;
    line-height: 1.5;
    white-space: pre-wrap;

    & + & {
      padding: 1rem 0;
    }

    & > img {
      display: block;
      max-width: 100%;
      margin: 2rem auto;
    }

    & > a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.ftBlue};
      font-weight: 400;
    }

    & > code {
      background: ${({ theme }) => theme.colors.bgGray};
      padding: 0.2em 0.4em;
      border-radius: 8px;
      font-size: 85%;
      font-family: inherit;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 600;
    margin-bottom: 1.25rem;
    line-height: 1.5;
  }

  h1,
  h2 {
    padding-left: 1rem;
    border-left: 4px solid ${({ theme }) => theme.colors.bdGrayDark};
  }

  h1 {
    font-size: 2.5rem;

    ${({ theme }) => theme.medias.tablet} {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;

    ${({ theme }) => theme.medias.tablet} {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;

    ${({ theme }) => theme.medias.tablet} {
      font-size: 1.25rem;
    }
  }

  h4 {
    font-size: 1.125rem;

    ${({ theme }) => theme.medias.tablet} {
      font-size: 1rem;
    }
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4 {
    margin-top: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1.5rem 0;
  }

  hr {
    width: 100%;
    height: 1px;
    margin: 1rem 0;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: ${({ theme }) => theme.colors.bdGrayDark};
  }

  blockquote {
    margin: 1.25rem 0;
    padding: 0.25rem 1rem;
    border-left: 3px solid ${({ theme }) => theme.colors.bgGrayDark};

    & > p {
      padding: 0;
      color: ${({ theme }) => theme.colors.ftGrayDark3};
      font-size: 1rem;
      font-style: italic;
    }

    &:first-child {
      margin-top: 0px;
    }

    &:last-child {
      margin-bottom: 0px;
    }
  }

  pre,
  code {
    font-family: "Fira Mono", source-code-pro, Menlo, Monaco, Consolas,
      "Courier New", monospace !important;
  }

  pre {
    margin: 1.5rem 0;
    overflow-x: auto;
    font-size: 0.875rem;
    letter-spacing: 0px;

    ${({ theme }) => theme.medias.tablet} {
      font-size: 0.625rem;
    }

    & > div {
      border-radius: 8px !important;
      background: ${({ theme }) => theme.colors.bgGray1} !important;
    }
  }

  table {
    display: block;
    width: 100%;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    max-width: 100%;
    padding: 1.5rem 0;
    overflow: auto;
    border-collapse: collapse;

    tr {
      background-color: ${({ theme }) => theme.colors.bgWhite};
      border-top: 1px solid ${({ theme }) => theme.colors.bdGray};

      &:nth-child(2n) {
        background-color: ${({ theme }) => theme.colors.bgGray1};
      }
    }

    td,
    th {
      padding: 0.5rem 0.8rem;
      border: 1px solid ${({ theme }) => theme.colors.bdGray};
    }
  }
`;

export default MarkDown;
