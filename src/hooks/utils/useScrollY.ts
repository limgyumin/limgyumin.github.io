import { useEffect, useState } from "react";

const useScrollY = (): number => {
  const [scrollY, setScrollY] = useState<number>(window.scrollY);

  const scrollEventHandler = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEventHandler);

    return () => window.removeEventListener("scroll", scrollEventHandler);
  }, []);

  return scrollY;
};

export default useScrollY;
