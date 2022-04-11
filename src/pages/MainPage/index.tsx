import React from "react";
import { observer } from "mobx-react";

import Layout from "@/components/common/templates/Layout";
import Categories from "@/components/Categories";
import PostList from "@/components/PostList";
import PageNavigation from "@/components/PageNavigation";
import LoadingIndicator from "@/components/common/molecules/LoadingIndicator";

import usePosts from "@/hooks/usePosts";
import useCategories from "@/hooks/useCategories";
import postStore from "@/stores/postStore";

const MainPage: React.FC = () => {
  usePosts();
  useCategories();

  const { posts } = postStore;

  if (posts === null) {
    return <LoadingIndicator />;
  }

  return (
    <Layout>
      <PostList posts={posts} />
      <PageNavigation />
    </Layout>
  );
};

export default observer(MainPage);
