import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import BottomNavigationSelectorProvider from "./bottom-navigation-selector";
import { theme } from "../theme";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import firebase from "@firebase/app";
import FirebaseComponent from "./firebase-component";
import SnackbarProvider from "./snackbar-provider";

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
      <SnackbarProvider>
        <FirebaseComponent>
          {({ currentUser }) => {
            return (
              <BottomNavigationSelectorProvider>
                {({ bottomTab, setBottomTab }) => {
                  return typeof children === "function"
                    ? children({ bottomTab, setBottomTab, currentUser })
                    : children;
                }}
              </BottomNavigationSelectorProvider>
            );
          }}
        </FirebaseComponent>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Providers);
