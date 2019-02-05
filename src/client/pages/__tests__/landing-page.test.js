import React from "react";
import LandingPage from "../landing-page";
import { cleanup } from "react-testing-library";
import { render } from "client/../../test/utils";

afterEach(cleanup);

test("that it renders without issues", () => {
  render(<LandingPage />);
});
