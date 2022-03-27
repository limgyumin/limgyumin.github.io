import { useEffect, useState } from "react";

enum Condition {
  Min = "min",
  Max = "max",
}
type ConditionValue = "min" | "max";

const isActiveByCondition: {
  [key in Condition]: (size: number, current: number) => boolean;
} = {
  [Condition.Max]: (size, current) => size > current,
  [Condition.Min]: (size, current) => size < current,
};

const useMediaQuery = (
  size: number,
  condition: ConditionValue = "max",
): boolean => {
  const getIsActive = isActiveByCondition[condition];

  const [active, setActive] = useState<boolean>(
    getIsActive(size, window.innerWidth),
  );

  const resizeEventHandler = () =>
    setActive(getIsActive(size, window.innerWidth));

  useEffect(() => {
    window.addEventListener("resize", resizeEventHandler);

    return () => window.removeEventListener("resize", resizeEventHandler);
  }, []);

  return active;
};

export default useMediaQuery;
