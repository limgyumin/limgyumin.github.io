import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import postStore from "@/stores/postStore";

import PostItem from "./PostItem";

const PostList: React.FC = () => {
  const { posts } = postStore;

  if (posts === null) {
    return null;
  }

  return (
    <Container data-testid="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  padding-bottom: 3rem;

  & > * + * {
    margin-top: 1.5rem;
  }

  ${({ theme }) => theme.medias.tablet} {
    padding-bottom: 2rem;

    & > * + * {
      margin-top: 1rem;
    }
  }
`;

export default observer(PostList);
