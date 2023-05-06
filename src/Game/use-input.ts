import { useMemo } from "react";
import { useKeyPress } from "../core/use-key-press";
import { Square, gameService } from "./game-service";

export const useInput = (squares: Square[]) => {
  const leftPressed = useKeyPress("ArrowLeft");
  const rightPressed = useKeyPress("ArrowRight");
  const upPressed = useKeyPress("ArrowUp");
  const downPressed = useKeyPress("ArrowDown");

  const updated = useMemo(() => {
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
  }, [leftPressed, rightPressed, upPressed, downPressed]);

  return updated;
};
