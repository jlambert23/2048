import { ThemeProvider } from "./core/ThemeProvider";
import { Game } from "./Game/Game";
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
