import React from "react";
import SpeedDial from "../speed-dial";
import { cleanup } from "react-testing-library";
import { render } from "client/../../test/utils";

afterEach(cleanup);

test("that it renders without issues", () => {
  render(<SpeedDial actions={[]} />);
});
