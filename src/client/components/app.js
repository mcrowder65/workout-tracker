import React from "react";
import compose from "lodash.compose";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import BottomNavigation from "./bottom-navigation";
import Workout from "./workout";
import Providers from "./providers";

function App({ classes }) {
  return (
    <Providers>
      <div className={classes.body}>
        <div className={classes.centered}>
          <Workout />
        </div>
        <div className={classes.footer}>
          <BottomNavigation />
        </div>
      </div>
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
