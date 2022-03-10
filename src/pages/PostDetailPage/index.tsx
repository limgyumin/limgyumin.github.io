import React, { useRef } from "react";
import { observer } from "mobx-react";

import Template from "@/components/common/Template";
import LoadingIndicator from "@/components/common/molecules/LoadingIndicator";
import PostDetailHeader from "@/components/PostDetailHeader";
import TableOfContent from "@/components/TableOfContent";
import PostDetailDescription from "@/components/PostDetailDescription";
import PostDetailArticle from "@/components/PostDetailArticle";
import Comments from "@/components/Comments";

import useScreen from "@/hooks/utils/useScreen";
import usePostDetail from "@/hooks/usePostDetail";
import postDetailStore from "@/stores/postDetailStore";
import { sizes } from "@/styles/medias";

const PostDetailPage: React.FC = () => {
  const articleRef = useRef<HTMLElement | null>(null);
  const screen = useScreen();
  usePostDetail();

  const isBiggerThanDesktopScreen = screen.width > sizes.desktop;

  const { postDetail } = postDetailStore;

  if (postDetail === null) {
    return <LoadingIndicator />;
  }

  return (
    <Template as="article" width="700px">
      <PostDetailHeader />
      {isBiggerThanDesktopScreen && <TableOfContent articleRef={articleRef} />}
      <PostDetailDescription />
      <PostDetailArticle ref={articleRef} />
      <Comments />
    </Template>
  );
};

export default observer(PostDetailPage);
