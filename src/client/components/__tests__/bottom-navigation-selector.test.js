
import React from "react";
import BottomNavigationSelector from "../bottom-navigation-selector";
import { cleanup } from "react-testing-library";
import { render } from "client/../../test/utils";

afterEach(cleanup);

test("that it renders without issues", () => {
  render(<BottomNavigationSelector/>);
});