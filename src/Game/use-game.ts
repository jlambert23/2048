import { useEffect, useState } from "react";
import { Square, gameService } from "./game-service";
import { useInput } from "./use-input";

export const useGame = (initialState: Square[] = []) => {
  const [squares, setSquares] = useState<Square[]>([
    ...initialState,
    gameService.generateSquare(),
  ]);
  const updated = useInput(squares);

  useEffect(() => {
    console.log(gameService.toString(squares));
  }, [squares]);

  useEffect(() => {
    if (
      updated &&
      gameService.isEqual(squares, updated) &&
      !gameService.checkGameOver(squares)
    ) {
      let newSquare = gameService.generateSquare();
      // eslint-disable-next-line no-loop-func
      while (updated.some((s) => s.x === newSquare.x && s.y === newSquare.y)) {
        newSquare = gameService.generateSquare();
      }
      setSquares([...updated, newSquare]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updated]);

  return { squares };
};
