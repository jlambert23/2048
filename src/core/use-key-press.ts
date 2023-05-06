import { useEffect, useState } from "react";

const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const keydown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === targetKey.toLowerCase()) {
        setKeyPressed(true);
      }
    };
    const keyup = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === targetKey.toLowerCase()) {
        setKeyPressed(false);
      }
    };

    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);

    return () => {
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("keyup", keyup);
    };
  }, []);

  return keyPressed;
};

export { useKeyPress };
