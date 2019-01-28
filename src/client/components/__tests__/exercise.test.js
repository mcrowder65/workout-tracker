import React from "react";
import { render, cleanup } from "react-testing-library";

import Exercise from "../exercise";

afterEach(cleanup);

test("that it renders without errors", () => {
  render(<Exercise />);
});
