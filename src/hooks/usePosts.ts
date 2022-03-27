import { useEffect } from "react";
import postStore from "@/stores/postStore";

const usePosts = (): void => {
  const { fetch, page, keyword } = postStore;

  useEffect(() => {
    fetch();
  }, [page, keyword]);
};

export default usePosts;
