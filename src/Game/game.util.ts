import groupBy from "lodash.groupby";

export const BOARD_SIZE = 4;

export type Square = {
  x: number;
  y: number;
  value: number;
};

type Direction = "left" | "right" | "up" | "down";

const sortMap: Record<Direction, (a: Square, b: Square) => number> = {
  left: (a, b) => a.x - b.x,
  right: (a, b) => b.x - a.x,
  up: (a, b) => a.y - b.y,
  down: (a, b) => b.y - a.y,
};

const toMap: Record<Direction, (group: Square[]) => Partial<Square>> = {
  left: (group) => ({ x: group[group.length - 1]?.x + 1 || 0 }),
  right: (group) => ({ x: group[group.length - 1]?.x - 1 || BOARD_SIZE - 1 }),
  up: (group) => ({ y: group[group.length - 1]?.y + 1 || 0 }),
  down: (group) => ({ y: group[group.length - 1]?.y - 1 || BOARD_SIZE - 1 }),
};

export const move = (direction: Direction) => {
  const key = ["left", "right"].includes(direction) ? "y" : "x";
  const sortFn = sortMap[direction];
  const to = toMap[direction];

  const moveGroup = (squares: Square[]) => {
    const sorted = squares.sort(sortFn);
    return sorted.reduce<Square[]>((updated, square) => {
      const last = updated.at(-1);

      // merge squares
      if (last?.value === square.value) {
        return [...updated.slice(0, -1), { ...last, value: last.value * 2 }];
      }

      return [...updated, { ...square, ...to(updated) }];
    }, []);
  };

  return (squares: Square[]) => {
    const groups = Object.values(groupBy(squares, key));
    return groups.reduce<Square[]>(
      (updated, group) => [...updated, ...moveGroup(group)],
      []
    );
  };
};
