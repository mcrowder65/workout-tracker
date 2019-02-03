import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import BottomNavigationSelectorProvider from "./bottom-navigation-selector";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import firebase from "@firebase/app";

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

const config = {
  apiKey: "AIzaSyBnAdhESRtR59Ds8AjOVBaZvVx63f3P9lI",
  authDomain: "liftbuddyio.firebaseapp.com",
  databaseURL: "https://liftbuddyio.firebaseio.com",
  projectId: "liftbuddyio",
  storageBucket: "liftbuddyio.appspot.com",
  messagingSenderId: "521563099683",
};
firebase.initializeApp(config);
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
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Providers);
