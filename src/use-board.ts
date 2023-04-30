import { useState, useEffect } from "react";
import { useKeyPress } from "./use-key-press";

export type Square = {
  x: number;
  y: number;
  value: number;
};

export const useBoard = (initialState: Square[]) => {
  const [squares, setSquares] = useState<Square[]>(initialState);

  const leftPressed = useKeyPress("ArrowLeft");
  const rightPressed = useKeyPress("ArrowRight");
  const upPressed = useKeyPress("ArrowUp");
  const downPressed = useKeyPress("ArrowDown");

  useEffect(() => {
    const moveMap: { [direction: string]: (square: Square) => Square } = {
      left: ({ x, ...rest }) => ({ x: Math.max(x - 1, 0), ...rest }),
      right: ({ x, ...rest }) => ({ x: Math.min(x + 1, 3), ...rest }),
      up: ({ y, ...rest }) => ({ y: Math.max(y - 1, 0), ...rest }),
      down: ({ y, ...rest }) => ({ y: Math.min(y + 1, 3), ...rest }),
    };

    if (leftPressed) {
      setSquares(squares.map(moveMap.left));
    }
    if (rightPressed) {
      setSquares(squares.map(moveMap.right));
    }
    if (upPressed) {
      setSquares(squares.map(moveMap.up));
    }
    if (downPressed) {
      setSquares(squares.map(moveMap.down));
    }
  }, [leftPressed, rightPressed, upPressed, downPressed]);

  return { squares };
};
