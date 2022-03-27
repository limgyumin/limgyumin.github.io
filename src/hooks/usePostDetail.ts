import { useEffect } from "react";
import { useParams } from "react-router-dom";

import postDetailStore from "@/stores/postDetailStore";

const usePostDetail = (): void => {
  const { id } = useParams();

  const { fetch } = postDetailStore;

  useEffect(() => {
    if (id) {
      fetch(id);
    }
  }, [id]);
};

export default usePostDetail;
