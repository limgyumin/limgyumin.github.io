import { useEffect } from "react";

import categoryStore from "@/stores/categoryStore";

const useCategories = (): void => {
  const { categories, fetch } = categoryStore;

  useEffect(() => {
    if (categories === null) {
      fetch();
    }
  }, []);
};

export default useCategories;
