import { MantineThemeColors } from "@mantine/core";

export const colorThemes = (colors: MantineThemeColors) => ({
  rgb: {
    2: { backgroundColor: colors.red[9], color: colors.gray[3] },
    4: { backgroundColor: colors.green[9], color: colors.gray[3] },
    8: { backgroundColor: colors.blue[9], color: colors.gray[3] },
    16: { backgroundColor: colors.red[7], color: colors.gray[3] },
    32: { backgroundColor: colors.green[7], color: colors.gray[3] },
    64: { backgroundColor: colors.blue[7], color: colors.gray[3] },
    128: { backgroundColor: colors.red[5], color: colors.gray[1] },
    256: { backgroundColor: colors.green[5], color: colors.gray[1] },
    516: { backgroundColor: colors.blue[5], color: colors.gray[1] },
    1024: { backgroundColor: colors.red[3], color: colors.gray[1] },
    2048: { backgroundColor: colors.green[3], color: colors.gray[1] },
    4096: { backgroundColor: colors.blue[3], color: colors.gray[1] },
    8192: { backgroundColor: colors.red[1], color: colors.dark[2] },
    16384: { backgroundColor: colors.green[1], color: colors.dark[2] },
    32768: { backgroundColor: colors.blue[1], color: colors.dark[2] },
    65536: { backgroundColor: colors.red[0], color: colors.dark[2] },
  } as Record<number, Record<string, string>>,
});
