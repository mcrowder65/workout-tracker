import React from "react";
import { render as rtlRender } from "react-testing-library";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "../src/client/theme";

export const render = (yourComponent) => {
  return rtlRender(
    <MuiThemeProvider theme={theme}>{yourComponent}</MuiThemeProvider>,
  );
};
