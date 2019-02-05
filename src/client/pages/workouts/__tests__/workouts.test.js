
import React from "react";
import Workouts from "../workouts";
import { cleanup } from "react-testing-library";
import { render } from "client/../../test/utils";

afterEach(cleanup);

test("that it renders without issues", () => {
  render(<Workouts/>);
});