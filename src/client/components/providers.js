import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from "@material-ui/core/styles";

import BottomNavigationSelectorProvider from "./bottom-navigation-selector";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});
function Providers({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <BottomNavigationSelectorProvider>
        {children}
      </BottomNavigationSelectorProvider>
    </MuiThemeProvider>
  );
}

Providers.propTypes = { children: PropTypes.node.isRequired };

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Providers);
