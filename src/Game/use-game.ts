import { useEffect, useState } from "react";
import { BOARD_SIZE, Square, gameService } from "./game-service";
import { useKeyPress } from "../core/use-key-press";

export const useGame = (initialState: Square[] = []) => {
  const [squares, setSquares] = useState<Square[]>([
    ...initialState,
    gameService.generateSquare(),
  ]);

  const leftPressed = useKeyPress("ArrowLeft");
  const rightPressed = useKeyPress("ArrowRight");
  const upPressed = useKeyPress("ArrowUp");
  const downPressed = useKeyPress("ArrowDown");

  useEffect(() => {
    const updated = (() => {
      if (leftPressed) {
        return gameService.move("left")(squares);
      }
      if (rightPressed) {
        return gameService.move("right")(squares);
      }
      if (upPressed) {
        return gameService.move("up")(squares);
      }
      if (downPressed) {
        return gameService.move("down")(squares);
      }
    })();

    if (updated && gameService.squaresAreDifferent(squares, updated)) {
      setSquares([...updated, gameService.generateSquare()]);
    }
  }, [leftPressed, rightPressed, upPressed, downPressed]);

  return { squares };
};
