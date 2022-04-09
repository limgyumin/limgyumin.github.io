import { useEffect } from "react";

import useQueryString from "./utils/useQueryString";
import searchStore from "@/stores/searchStore";
import { SEARCH_KEYWORD_KEY } from "@/constants/search";

const useSearchPosts = (): void => {
  const getQueryString = useQueryString();

  const keyword = getQueryString(SEARCH_KEYWORD_KEY)!;

  const { fetch } = searchStore;

  useEffect(() => {
    if (keyword !== "") {
      fetch(keyword);
    }
  }, [keyword]);
};

export default useSearchPosts;
