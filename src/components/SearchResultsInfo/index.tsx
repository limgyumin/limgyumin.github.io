import React from "react";
import styled from "styled-components";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import useQueryString from "@/hooks/utils/useQueryString";
import { SEARCH_KEYWORD_KEY } from "@/constants/search";
import { ellipsis } from "@/styles/utils";
import useMediaQuery from "@/hooks/utils/useMediaQuery";
import { sizes } from "@/styles/medias";

const SearchResultsInfo: React.FC = () => {
  const isBiggerThanTablet = useMediaQuery(sizes.mobile, "min");

  const getQueryString = useQueryString();

  const result = getQueryString(SEARCH_KEYWORD_KEY);

  return (
    <Container data-testid="search-results-info">
      <Result>
        <RiDoubleQuotesL />
        <Keyword>{result}</Keyword>
        <RiDoubleQuotesR />
        {isBiggerThanTablet && <span>의 검색결과</span>}
      </Result>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 3rem;

  ${({ theme }) => theme.medias.tablet} {
    margin-bottom: 2rem;
  }
`;

const Result = styled.h2`
  display: flex;
  align-items: flex-start;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.ftBlack};

  & > span {
    font-weight: 500;
  }

  & > svg {
    min-width: 1.75rem;
    min-height: 1.75rem;
    width: 1.75rem;
    height: 1.75rem;
  }

  ${({ theme }) => theme.medias.tablet} {
    font-size: 1.625rem;

    & > svg {
      min-width: 1rem;
      min-height: 1rem;
      width: 1rem;
      height: 1rem;
    }
  }
`;

const Keyword = styled.p`
  max-width: 23rem;
  word-break: break-all;
  ${ellipsis(1)};
`;

export default SearchResultsInfo;
