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
  fab: {
    position: "absolute",
    bottom: 70,
    right: 10,
  },
});
function Providers({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <BottomNavigationSelectorProvider>
        {({ bottomTab, setBottomTab }) => {
          return typeof children === "function"
            ? children({ bottomTab, setBottomTab })
            : children;
        }}
      </BottomNavigationSelectorProvider>
    </MuiThemeProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Providers);
