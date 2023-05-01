import { Card, SimpleGrid } from "@mantine/core";
import { Square } from "./Square";
import { useGame } from "./use-game";

const Game = () => {
  const { squares } = useGame([
    { x: 1, y: 1, value: 2048 },
    { x: 3, y: 3, value: 1024 },
  ]);

  return (
    <Card shadow="sm" withBorder sx={{ height: "60%", aspectRatio: "1 / 1" }}>
      <SimpleGrid cols={4} sx={{ height: "100%", gap: 10 }}>
        {[...new Array(16)].map((_, i) => {
          const x = i % 4;
          const y = Math.floor(i / 4);
          const square = squares.find(
            (square) => x === square.x && y === square.y
          );

          return <Square key={`${x},${y}`}>{square?.value}</Square>;
        })}
      </SimpleGrid>
    </Card>
  );
};

export { Game };
