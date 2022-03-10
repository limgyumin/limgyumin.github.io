import React, { forwardRef } from "react";
import { observer } from "mobx-react";

import MarkDown from "../Markdown";

import postDetailStore from "@/stores/postDetailStore";

const PostDetailArticle = forwardRef<HTMLElement>((_, ref) => {
  const { postDetail } = postDetailStore;

  if (postDetail === null) {
    return null;
  }

  const { article } = postDetail;

  return <MarkDown ref={ref}>{article}</MarkDown>;
});

export default observer(PostDetailArticle);
