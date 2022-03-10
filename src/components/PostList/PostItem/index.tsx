import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Post from "@/models/Post";
import DateUtil from "@/utils/date";

type Props = {
  post: Post;
};

const PostItem: React.FC<Props> = ({ post }) => {
  const navigate = useNavigate();

  const { id, title, description, category, createdAt } = post;

  const formattedCreatedAt = new DateUtil(createdAt).format();

  const handleClick = () => navigate(`/post/${id}`);

  return (
    <Container onClick={handleClick}>
      <Header>
        {category && (
          <Category data-testid="post-category">
            {category.toUpperCase()}
          </Category>
        )}
        <Date data-testid="post-date">{formattedCreatedAt}</Date>
      </Header>
      <Title data-testid="post-title">{title}</Title>
      {description && (
        <Description data-testid="post-description">{description}</Description>
      )}
    </Container>
  );
};

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
  margin-top: 0.7rem;
  color: ${({ theme }) => theme.colors.ftBlack};

  ${({ theme }) => theme.medias.tablet} {
    font-size: 1.375rem;
  }
`;

const Description = styled.p`
  margin-top: 0.5rem;
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
