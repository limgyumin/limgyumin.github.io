import { useEffect, useRef, useState } from "react";

type Return<T> = [React.MutableRefObject<T | null>, boolean];

const useFixed = <T extends HTMLElement>(): Return<T> => {
  const [fixed, setFixed] = useState<boolean>(false);

  const ref = useRef<T | null>(null);

  const scrollEventHandler = () => {
    if (ref.current === null) return;

    const { clientHeight } = ref.current;
    const { scrollTop } = document.documentElement;

    setFixed(clientHeight < scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEventHandler);

    return () => window.removeEventListener("scroll", scrollEventHandler);
  }, []);

  return [ref, fixed];
};

export default useFixed;
