import React from "react";
import compose from "lodash.compose";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import BottomNavigation from "./bottom-navigation";
import Providers from "./providers";
import { bottomNavigationRoutes } from "../navigation";
import Home from "../pages/home/home";
import Profile from "../pages/profile/profile";
import Workouts from "../pages/workouts/workouts";

function App({ classes }) {
  return (
    <Providers>
      {({ bottomTab }) => {
        return (
          <div className={classes.body}>
            <div className={classes.centered}>
              {bottomTab === bottomNavigationRoutes.home ? <Home /> : null}
              {bottomTab === bottomNavigationRoutes.profile ? (
                <Profile />
              ) : null}
              {bottomTab === bottomNavigationRoutes.workouts ? (
                <Workouts />
              ) : null}
            </div>
            <div className={classes.footer}>
              <BottomNavigation />
            </div>
          </div>
        );
      }}
    </Providers>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  footer: {
    position: "fixed",
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

const enhance = compose(withStyles(styles));
export default enhance(App);
