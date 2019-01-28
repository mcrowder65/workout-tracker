import React from "react";
import { render, cleanup } from "react-testing-library";

import AddExercise from "../add-exercise";

afterEach(cleanup);

test("that it renders without errors", () => {
  render(<AddExercise />);
});
