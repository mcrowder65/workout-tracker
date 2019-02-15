import React from "react";
import WorkoutModal from "../workout-modal";
import { cleanup } from "react-testing-library";
import { render } from "client/../../test/utils";

afterEach(cleanup);

test("that it renders without issues", () => {
  render(<WorkoutModal onCancelClick={jest.fn()} onSubmit={jest.fn()} />);
});
