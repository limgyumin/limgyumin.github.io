import { useLocation } from "react-router-dom";

type Return = (name: string) => string | null;

const useQueryString = (): Return => {
  const { search } = useLocation();

  const getQueryString = (name: string): string | null =>
    new URLSearchParams(search).get(name);

  return getQueryString;
};

export default useQueryString;
