import { test } from "uvu";
import { render } from "solid-testing-library";
import { HopeProvider } from "@hope-ui/solid";
import TransUnit from "./TransUnit";

const props = {
  index: 1,
  id: "0000",
  source: "hello world",
  target: "hola mundo",
  setTarget: (t: string) => {},
};

test("render test", () => {
  render(() => (
    <HopeProvider>
      <TransUnit
        index={props.index}
        id={props.id}
        source={props.source}
        target={props.target}
        setTarget={props.setTarget}
      />
    </HopeProvider>
  ));
});

test.run();
