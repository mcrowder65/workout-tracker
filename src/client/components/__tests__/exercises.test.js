import React from "react";
import { render, cleanup } from "react-testing-library";

import Exercises from "../exercises";

afterEach(cleanup);

test("that it renders without errors", () => {
  render(<Exercises />);
});
