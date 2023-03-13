import { Card, Center, SimpleGrid, useMantineTheme } from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import { useKeyPress } from "./use-key-press";

type Square = {
  x: number;
  y: number;
  value: number;
};

const Square = ({ children }: { children?: number }) => {
  const { colors } = useMantineTheme();

  const styles = useMemo(() => {
    return children
      ? {
          color: colors.white,
          backgroundColor: colors.green[8],
        }
      : {
          backgroundColor: colors.dark[4],
        };
  }, [children]);

  return (
    <Card withBorder sx={{ aspectRatio: "1 / 1", ...styles }}>
      <Center sx={{ fontSize: 32, userSelect: "none", height: "100%" }}>
        {children}
      </Center>
    </Card>
  );
};

const Game = () => {
  const [squares, setSquares] = useState<Square[]>([
    { x: 1, y: 1, value: 2048 },
    { x: 3, y: 3, value: 1024 },
  ]);
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

  return (
    <Card shadow="sm" withBorder sx={{ height: "60%", aspectRatio: "1 / 1" }}>
      <SimpleGrid cols={4} sx={{ height: "100%", gap: 10 }}>
        {[...new Array(16)].map((_, i) => {
          const x = i % 4;
          const y = Math.floor(i / 4);
          const square = squares.find(
            (square) => x === square.x && y === square.y
          );

          return <Square>{square?.value}</Square>;
        })}
      </SimpleGrid>
    </Card>
  );
};

export { Game };
