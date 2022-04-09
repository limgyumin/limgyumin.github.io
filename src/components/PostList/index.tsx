import React from "react";
import styled from "styled-components";

import PostItem from "./PostItem";
import Post from "@/models/Post";

type Props = {
  posts: Post[];
};

const PostList: React.FC<Props> = ({ posts }) => (
  <Container data-testid="post-list">
    {posts.map((post) => (
      <PostItem key={post.id} post={post} />
    ))}
  </Container>
);

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

export default PostList;
