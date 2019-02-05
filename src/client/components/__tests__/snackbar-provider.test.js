import React from "react";
import SnackbarProvider from "../snackbar-provider";
import { cleanup } from "react-testing-library";
import { render } from "client/../../test/utils";

afterEach(cleanup);

test("that it renders without issues", () => {
  render(<SnackbarProvider />);
});
