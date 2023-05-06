import { MantineThemeColors } from "@mantine/core";

export const SAMPLE_SQUARES = [
  { x: 0, y: 0, value: 2 },
  { x: 1, y: 0, value: 4 },
  { x: 2, y: 0, value: 8 },
  { x: 3, y: 0, value: 16 },
  { x: 0, y: 1, value: 32 },
  { x: 1, y: 1, value: 64 },
  { x: 2, y: 1, value: 128 },
  { x: 3, y: 1, value: 256 },
  { x: 0, y: 2, value: 516 },
  { x: 1, y: 2, value: 1024 },
  { x: 2, y: 2, value: 2048 },
  { x: 3, y: 2, value: 4096 },
  { x: 0, y: 3, value: 8192 },
  { x: 1, y: 3, value: 16384 },
  { x: 2, y: 3, value: 32768 },
  { x: 3, y: 3, value: 65536 },
];

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
