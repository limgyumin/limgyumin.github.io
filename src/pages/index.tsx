import React from "react";
import loadable from "@loadable/component";

import LoadingIndicator from "@/components/common/molecules/LoadingIndicator";

const Main = loadable(() => import("./MainPage"), {
  fallback: <LoadingIndicator />,
});

const PostDetail = loadable(() => import("./PostDetailPage"), {
  fallback: <LoadingIndicator />,
});

const Search = loadable(() => import("./SearchPage"), {
  fallback: <LoadingIndicator />,
});

export { Main, PostDetail, Search };
