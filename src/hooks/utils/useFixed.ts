import { useEffect, useState } from "react";
import useScrollY from "./useScrollY";

const useFixed = (y: number): boolean => {
  const scrollY = useScrollY();

  const [fixed, setFixed] = useState<boolean>(false);

  useEffect(() => {
    setFixed(scrollY >= y);
  }, [scrollY]);

  return fixed;
};

export default useFixed;
