import React, { ReactElement } from "react";
import styled from "styled-components";

import Post from "@/models/Post";
import DateFormatter from "@/utils/date";

type Props = {
  post: Post;
};

function PostItem({ post }: Props): ReactElement {
  const { title, description, category, createdAt } = post;

  const formattedCreatedAt = new DateFormatter(createdAt).format();

  return (
    <Container>
      <Header>
        <Category data-testid="post-category">
          {category.toUpperCase()}
        </Category>
        <Date data-testid="post-date">{formattedCreatedAt}</Date>
      </Header>
      <Title data-testid="post-title">{title}</Title>
      <Description data-testid="post-description">{description}</Description>
    </Container>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Category = styled.p`
  margin-right: 0.75rem;
  padding: 0.35rem 0.7rem;
  font-weight: 500;
  font-size: 0.6rem;
  border-radius: 6px;
  letter-spacing: 1.4px;
  background-color: ${({ theme }) => theme.colors.bgBlack};
  color: ${({ theme }) => theme.colors.ftWhite};
`;

const Date = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.ftBlack};
`;

const Title = styled.h2`
  font-size: 1.625rem;
  font-weight: 600;
  margin: 0.7rem 0 0.5rem;
  color: ${({ theme }) => theme.colors.ftBlack};
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.ftBlack};
`;

const Container = styled.li`
  padding: 1.4rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.bgGray};
  border-radius: 8px;
  transition: background-color ease 0.3s, color ease 0.3s, box-shadow ease 0.3s,
    transform ease 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.01, 1.01);
    background-color: ${({ theme }) => theme.colors.bgBlack};
    box-shadow: 0px 8px 16px 0px ${({ theme }) => theme.colors.boxShadow};

    ${Title}, ${Description}, ${Date} {
      color: ${({ theme }) => theme.colors.ftWhite};
    }

    ${Category} {
      background-color: ${({ theme }) => theme.colors.bgWhite};
      color: ${({ theme }) => theme.colors.ftBlack};
    }
  }
`;

export default PostItem;
