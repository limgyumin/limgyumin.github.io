import React, { ReactElement } from "react";
import { observer } from "mobx-react";
import styled, { css } from "styled-components";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import postStore from "@/stores/postStore";
import { POST_COUNT_PER_FETCH } from "@/constants/post";

function PageNavigation(): ReactElement | null {
  const { totalCount, page, setPage } = postStore;

  if (totalCount === null) {
    return null;
  }

  const maxPage = Math.ceil(totalCount / POST_COUNT_PER_FETCH);

  const pageNumbers = [...Array(maxPage)].map((_, index) => index + 1);

  const hasPrevPage = page + 1 > 1;
  const hasNextPage = page + 1 < maxPage;

  const handleIncreasePage = () => {
    if (hasNextPage) {
      setPage(page + 1);
    }
  };

  const handleDecreasePage = () => {
    if (hasPrevPage) {
      setPage(page - 1);
    }
  };

  const handleSetPage = (page: number) => () => {
    setPage(page);
  };

  return (
    <Container data-testid="page-navigation">
      <ArrowButton
        data-testid="page-navigation-prev-btn"
        active={hasPrevPage}
        onClick={handleDecreasePage}
      >
        <RiArrowLeftSLine />
      </ArrowButton>
      <PageNumbers>
        {pageNumbers.map((number) => (
          <PageNumberButton
            key={number}
            active={page + 1 === number}
            onClick={handleSetPage(number - 1)}
          >
            {number}
          </PageNumberButton>
        ))}
      </PageNumbers>
      <ArrowButton
        data-testid="page-navigation-next-btn"
        active={hasNextPage}
        onClick={handleIncreasePage}
      >
        <RiArrowRightSLine />
      </ArrowButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  gap: 1rem;
`;

const PageNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  outline: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 400;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.ftBlack};
`;

const ArrowButton = styled(BaseButton)<{ active: boolean }>`
  ${({ active }) =>
    active
      ? css`
          color: ${({ theme }) => theme.colors.ftBlack};
        `
      : css`
          color: ${({ theme }) => theme.colors.ftGray};
          cursor: default;
        `};
`;

const PageNumberButton = styled(BaseButton)<{ active: boolean }>`
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.bgBlack};
      color: ${({ theme }) => theme.colors.ftWhite};
    `}

  font-size: 1rem;
`;

export default observer(PageNavigation);
