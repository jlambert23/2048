import { useEffect, useState } from "react";
import {
  BOARD_SIZE,
  Square,
  generateSquare,
  move,
  squaresAreDifferent,
} from "./game.util";
import { useKeyPress } from "../core/use-key-press";

export const useGame = (initialState: Square[] = []) => {
  const [squares, setSquares] = useState<Square[]>([
    ...initialState,
    generateSquare(),
  ]);

  const leftPressed = useKeyPress("ArrowLeft");
  const rightPressed = useKeyPress("ArrowRight");
  const upPressed = useKeyPress("ArrowUp");
  const downPressed = useKeyPress("ArrowDown");

  useEffect(() => {
    const updated = (() => {
      if (leftPressed) {
        return move("left")(squares);
      }
      if (rightPressed) {
        return move("right")(squares);
      }
      if (upPressed) {
        return move("up")(squares);
      }
      if (downPressed) {
        return move("down")(squares);
      }
    })();

    if (updated && squaresAreDifferent(squares, updated)) {
      setSquares([...updated, generateSquare()]);
    }
  }, [leftPressed, rightPressed, upPressed, downPressed]);

  return { squares };
};
