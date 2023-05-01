import { useEffect, useState } from "react";
import { Square, move } from "./game.util";
import { useKeyPress } from "./use-key-press";

export const useGame = (initialState: Square[]) => {
  const [squares, setSquares] = useState<Square[]>(initialState);

  const leftPressed = useKeyPress("ArrowLeft");
  const rightPressed = useKeyPress("ArrowRight");
  const upPressed = useKeyPress("ArrowUp");
  const downPressed = useKeyPress("ArrowDown");

  useEffect(() => {
    if (leftPressed) {
      setSquares(move("left")(squares));
    }
    if (rightPressed) {
      setSquares(move("right")(squares));
    }
    if (upPressed) {
      setSquares(move("up")(squares));
    }
    if (downPressed) {
      setSquares(move("down")(squares));
    }
  }, [leftPressed, rightPressed, upPressed, downPressed]);

  return { squares };
};
