import { useEffect } from "react";
import { useParams } from "react-router-dom";

import postDetailStore from "@/stores/postDetailStore";

const usePostDetail = (): void => {
  const { id } = useParams();

  const { fetchPostDetail } = postDetailStore;

  useEffect(() => {
    if (id) {
      fetchPostDetail(id);
    }
  }, []);
};

export default usePostDetail;
