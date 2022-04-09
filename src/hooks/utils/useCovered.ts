import { useEffect, useRef, useState } from "react";

type Return<T> = [React.MutableRefObject<T | null>, boolean];

const useCovered = <T extends HTMLElement>(): Return<T> => {
  const [covered, setCovered] = useState<boolean>(false);

  const ref = useRef<T | null>(null);

  const scrollEventHandler = () => {
    if (ref.current === null) return;

    const { clientHeight } = ref.current;
    const { scrollTop } = document.documentElement;

    setCovered(clientHeight < scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEventHandler);

    return () => window.removeEventListener("scroll", scrollEventHandler);
  }, []);

  return [ref, covered];
};

export default useCovered;
