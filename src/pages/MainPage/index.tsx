import React, { ReactElement } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import PostList from "@/components/PostList";
import PageNavigation from "@/components/PageNavigation";

import usePosts from "@/hooks/usePosts";

function MainPage(): ReactElement {
  usePosts();

  return (
    <Container>
      <Wrapper>
        <PostList />
        <PageNavigation />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  width: inherit;
  margin: 0 1rem;
  padding: 2rem 0 4rem;
`;

export default observer(MainPage);
