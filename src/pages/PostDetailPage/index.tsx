import React, { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";

import Layout from "@/components/common/templates/Layout";
import LoadingIndicator from "@/components/common/molecules/LoadingIndicator";
import PostDetailHeader from "@/components/PostDetailHeader";
import TableOfContents from "@/components/TableOfContents";
import PostDetailDescription from "@/components/PostDetailDescription";
import PostDetailArticle from "@/components/PostDetailArticle";
import Comments from "@/components/Comments";

import useMediaQuery from "@/hooks/utils/useMediaQuery";
import usePostDetail from "@/hooks/usePostDetail";
import useFixed from "@/hooks/utils/useFixed";
import postDetailStore from "@/stores/postDetailStore";
import { sizes } from "@/styles/medias";

const PostDetailPage: React.FC = () => {
  usePostDetail();
  const isBiggerThanDesktop = useMediaQuery(sizes.desktop, "min");
  const [headerRef, fixed] = useFixed<HTMLDivElement>();
  const [article, setArticle] = useState<HTMLElement | null>(null);

  const articleRef = useRef<HTMLElement | null>(null);

  const { postDetail } = postDetailStore;

  useEffect(() => {
    if (!articleRef.current) return;

    setArticle(articleRef.current);
  }, [postDetail]);

  if (postDetail === null) {
    return <LoadingIndicator />;
  }

  return (
    <Layout>
      <PostDetailHeader ref={headerRef} />
      {article && isBiggerThanDesktop && (
        <TableOfContents article={article} fixed={fixed} />
      )}
      <PostDetailDescription />
      <PostDetailArticle ref={articleRef} />
      <Comments />
    </Layout>
  );
};

export default observer(PostDetailPage);
