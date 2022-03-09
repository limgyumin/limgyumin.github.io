import React from "react";
import { observer } from "mobx-react";

import Template from "@/components/common/Template";
import PostList from "@/components/PostList";
import PageNavigation from "@/components/PageNavigation";
import LoadingIndicator from "@/components/common/molecules/LoadingIndicator";

import usePosts from "@/hooks/usePosts";
import postStore from "@/stores/postStore";

const MainPage: React.FC = () => {
  usePosts();

  const { posts } = postStore;

  if (posts === null) {
    return <LoadingIndicator />;
  }

  return (
    <Template as="main">
      <PostList />
      <PageNavigation />
    </Template>
  );
};

export default observer(MainPage);
