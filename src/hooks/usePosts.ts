import { useEffect } from "react";
import postStore from "@/stores/postStore";

const usePosts = (): void => {
  const { fetchPosts, page } = postStore;

  useEffect(() => {
    fetchPosts();
  }, [page]);
};

export default usePosts;
