import React from "react";
import { render, cleanup } from "react-testing-library";

import Workout from "../workout";

afterEach(cleanup);

test("that it renders without errors", () => {
  render(<Workout />);
});
