import { useEffect } from "react";
import postStore from "@/stores/postStore";

const usePosts = (): void => {
  const { fetch, page } = postStore;

  useEffect(() => {
    fetch();
  }, [page]);
};

export default usePosts;
