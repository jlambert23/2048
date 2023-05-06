import { Card, Center, useMantineTheme } from "@mantine/core";
import { useMemo } from "react";
import { colorThemes } from "../core/colors-themes";
import { Square as ISquare } from "./game-service";

type Props = {
  square?: ISquare;
};

export const Square = ({ square }: Props) => {
  const { colors } = useMantineTheme();
  const colorMap = useMemo(() => colorThemes(colors).rgb, [colors]);

  const styles = useMemo(() => {
    return square
      ? colorMap[square.value]
      : { backgroundColor: colors.dark[4] };
  }, [square, colorMap, colors]);

  return (
    <Card withBorder sx={{ aspectRatio: "1 / 1", ...styles }}>
      <Center sx={{ fontSize: 32, userSelect: "none", height: "100%" }}>
        {square?.value}
      </Center>
    </Card>
  );
};
