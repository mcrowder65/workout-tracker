import React from "react";
import { cleanup } from "react-testing-library";
import { render } from "client/../../test/utils";

import AddExercise from "../add-exercise";

afterEach(cleanup);

test("that it renders without errors", () => {
  render(<AddExercise />);
});
