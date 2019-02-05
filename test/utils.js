import React from "react";
import { render as rtlRender } from "react-testing-library";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "../src/client/theme";
import FirebaseComponent from "../src/client/components/firebase-component";
import SnackbarProvider from "../src/client/components/snackbar-provider";

export const render = (yourComponent) => {
  return rtlRender(
    <FirebaseComponent>
      <SnackbarProvider>
        <MuiThemeProvider theme={theme}>{yourComponent}</MuiThemeProvider>
      </SnackbarProvider>
    </FirebaseComponent>,
  );
};
