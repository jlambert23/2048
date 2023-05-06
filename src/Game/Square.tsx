import { Card, Center, useMantineTheme } from "@mantine/core";
import { useMemo } from "react";

type Props = {
  children?: number;
  color: "blue" | "green" | "red";
};

export const Square = ({ children, color }: Props) => {
  const { colors } = useMantineTheme();

  const styles = useMemo(() => {
    const colorMap = {
      blue: colors.blue[8],
      green: colors.green[8],
      red: colors.red[8],
    };

    return children
      ? {
          color: colors.white,
          backgroundColor: colorMap[color],
        }
      : {
          backgroundColor: colors.dark[4],
        };
  }, [children, color]);

  return (
    <Card withBorder sx={{ aspectRatio: "1 / 1", ...styles }}>
      <Center sx={{ fontSize: 32, userSelect: "none", height: "100%" }}>
        {children}
      </Center>
    </Card>
  );
};
