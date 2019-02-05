import React from "react";
import compose from "lodash.compose";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

import BottomNavigation from "./bottom-navigation";
import Providers from "./providers";
import { bottomNavigationRoutes } from "../navigation";
import LandingPage from "../pages/landing-page";

function App({ classes }) {
  return (
    <Providers>
      {({ bottomTab, currentUser }) => {
        const Route = bottomNavigationRoutes[bottomTab].component;
        let Screen;
        if (currentUser === false) {
          Screen = () => (
            <div className={classes.centered}>
              <CircularProgress color="primary" />
            </div>
          );
        } else if (currentUser === null) {
          Screen = () => <LandingPage />;
        } else if (currentUser) {
          Screen = () => (
            <>
              <div className={classes.centered}>{<Route />}</div>
              <div className={classes.footer}>
                <BottomNavigation />
              </div>
            </>
          );
        }
        return (
          <div className={classes.body}>
            <Screen />
          </div>
        );
      }}
    </Providers>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = () => {
  return {
    footer: {
      position: "absolute",
      width: "100%",
      bottom: 0,
    },
    body: {
      height: "100%",
      width: "100%",
    },
    centered: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
};

const enhance = compose(withStyles(styles));
export default enhance(App);
