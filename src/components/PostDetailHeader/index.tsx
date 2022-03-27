import React, { forwardRef } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import { RiCalendar2Fill } from "react-icons/ri";

import postDetailStore from "@/stores/postDetailStore";
import DateUtil from "@/utils/date";

const PostDetailHeader = forwardRef<HTMLDivElement>((_, ref) => {
  const { postDetail } = postDetailStore;

  if (postDetail === null) {
    return null;
  }

  const { title, category, createdAt } = postDetail;

  const formattedCreatedAt = new DateUtil(createdAt).format();

  return (
    <Container ref={ref}>
      {category && (
        <Category data-testid="post-header-category">
          {category.toUpperCase()}
        </Category>
      )}
      <Title data-testid="post-header-title">{title}</Title>
      <Date data-testid="post-header-created-at">
        <RiCalendar2Fill />
        {formattedCreatedAt}
      </Date>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  padding-bottom: 3.5rem;
  text-align: center;

  ${({ theme }) => theme.medias.tablet} {
    padding-bottom: 2.5rem;
  }
`;

const Category = styled.span`
  display: inline-block;
  margin-bottom: 1.375rem;
  padding: 0.4rem 0.75rem;
  font-weight: 600;
  font-size: 0.8125rem;
  border-radius: 6px;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.colors.bgGray};
  color: ${({ theme }) => theme.colors.ftBlack};
`;

const Title = styled.h1`
  margin-bottom: 1.375rem;
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.ftBlack};
  word-break: keep-all;

  ${({ theme }) => theme.medias.tablet} {
    font-size: 2.25rem;
  }
`;

const Date = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ftGrayDark};

  & > svg {
    margin-right: 0.375rem;
  }
`;

export default observer(PostDetailHeader);
