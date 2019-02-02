import React from "react";
import compose from "lodash.compose";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import BottomNavigation from "./bottom-navigation";
import Workout from "./workout";

function App({ classes }) {
  return (
    <div className={classes.body}>
      <div className={classes.centered}>
        <Workout />
      </div>
      <div className={classes.footer}>
        <BottomNavigation />
      </div>
    </div>
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
