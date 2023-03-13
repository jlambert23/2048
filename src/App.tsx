import { ThemeProvider } from "./ThemeProvider";
import { Game } from "./Game";
import { Center } from "@mantine/core";

export default function App() {
  return (
    <ThemeProvider>
      <Center h={"100vh"} mx="auto">
        <Game />
      </Center>
    </ThemeProvider>
  );
}
