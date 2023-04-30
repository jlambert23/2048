import { Card, Center, SimpleGrid, useMantineTheme } from "@mantine/core";
import { useMemo } from "react";
import { useBoard } from "./use-board";

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
  const { squares } = useBoard([
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
