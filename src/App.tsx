import type { Component } from "solid-js";
import type { Unit } from "./logic";
import { For } from "solid-js";

import {
  HopeProvider,
  Container,
  IconButton,
  Box,
  HStack,
  Text,
} from "@hope-ui/solid";
import { Upload, Download } from "./icons";
import TransUnit from "./TransUnit";

import { createStore } from "solid-js/store";
export const [state, setState] = createStore({
  filename: "input xliff file!",
  units: [] as Unit[],
  xml: null as Document | null,
});

const App: Component = () => {
  return (
    <HopeProvider>
      <Container>
        <Box>
          <HStack spacing="24px">
            <Text size="5xl">{state.filename}</Text>
            <IconButton
              variant="outline"
              aria-label="Upload"
              icon={<Upload />}
            />
            <IconButton
              variant="outline"
              aria-label="Download"
              icon={<Download />}
            />
          </HStack>
          <Box bg="$primary6">
            <For each={state.units}>
              {(unit, index) => (
                <TransUnit
                  index={index()}
                  id={unit.id}
                  source={unit.source}
                  target={unit.target}
                  setTarget={(t: string) =>
                    setState(
                      "units",
                      state.units.map((e, i) =>
                        i === index() ? { ...e, target: t } : e
                      )
                    )
                  }
                ></TransUnit>
              )}
            </For>
          </Box>
        </Box>
      </Container>
    </HopeProvider>
  );
};

export default App;
