import { Card, SimpleGrid } from "@mantine/core";
import { Square } from "./Square";
import { BOARD_SIZE } from "./game-service";
import { useGame } from "./use-game";
import { useMemo } from "react";

const Game = () => {
  const { squares } = useGame();

  const board = useMemo(
    () => [...new Array(Math.pow(BOARD_SIZE, 2))],
    [BOARD_SIZE]
  );

  return (
    <Card shadow="sm" withBorder sx={{ height: "60%", aspectRatio: "1 / 1" }}>
      <SimpleGrid cols={BOARD_SIZE} sx={{ height: "100%", gap: 10 }}>
        {board.map((_, i) => {
          const x = i % BOARD_SIZE;
          const y = Math.floor(i / BOARD_SIZE);
          const square = squares.find((s) => s.x === x && s.y === y);
          return <Square key={`${x},${y}`} square={square} />;
        })}
      </SimpleGrid>
    </Card>
  );
};

export { Game };
