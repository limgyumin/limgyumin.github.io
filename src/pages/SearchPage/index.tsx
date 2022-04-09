import React, { useEffect } from "react";
import { observer } from "mobx-react";

import Layout from "@/components/common/templates/Layout";
import SearchResultsInfo from "@/components/SearchResultsInfo";
import PostList from "@/components/PostList";
import LoadingIndicator from "@/components/common/molecules/LoadingIndicator";

import useSearchPosts from "@/hooks/useSearchPosts";
import searchStore from "@/stores/searchStore";

const SearchPage: React.FC = () => {
  useSearchPosts();
  const { posts } = searchStore;

  if (posts === null) {
    return <LoadingIndicator />;
  }

  return (
    <Layout>
      <SearchResultsInfo />
      <PostList posts={posts} />
    </Layout>
  );
};

export default observer(SearchPage);
