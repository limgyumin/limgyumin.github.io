import React, { ReactElement } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import postStore from "@/stores/postStore";

import PostItem from "./PostItem";
import LoadingIndicator from "../common/LoadingIndicator";

function PostList(): ReactElement {
  const { posts } = postStore;

  if (posts === null) {
    return <LoadingIndicator />;
  }

  return (
    <Container data-testid="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Container>
  );
}

const Container = styled.ul`
  padding: 5rem 0 2rem;

  & > * + * {
    margin-top: 1.5rem;
  }
`;

export default observer(PostList);
