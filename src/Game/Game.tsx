import { Card, SimpleGrid } from "@mantine/core";
import { Square } from "./Square";
import { BOARD_SIZE } from "./game.util";
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
          const value = squares.find((s) => x === s.x && y === s.y)?.value;

          const color = (() => {
            const idx = Math.log2(value || 0) % 3;
            return (["blue", "red", "green"] as const)[idx];
          })();

          return (
            <Square key={`${x},${y}`} color={color}>
              {value}
            </Square>
          );
        })}
      </SimpleGrid>
    </Card>
  );
};

export { Game };
