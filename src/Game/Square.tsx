import { Card, Center, useMantineTheme } from "@mantine/core";
import { useMemo } from "react";

export const Square = ({ children }: { children?: number }) => {
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
