import { useEffect, useState } from "react";

type Screen = {
  width: number;
  height: number;
};

const useScreen = (): Screen => {
  const [screen, setScreen] = useState<Screen>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeEventHandler = () => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeEventHandler);

    return () => window.removeEventListener("resize", resizeEventHandler);
  }, []);

  return screen;
};

export default useScreen;
