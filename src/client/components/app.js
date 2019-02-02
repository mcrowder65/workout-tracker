import React from "react";
import compose from "lodash.compose";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import BottomNavigation from "./bottom-navigation";
import Workout from "./workout";

function App({ classes }) {
  return (
    <React.Fragment>
      <div>
        <div className={classes.centered}>
          <Workout />
        </div>
        <footer>
          <BottomNavigation />
        </footer>
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  body: {},
  centered: {
    display: "flex",
    justifyContent: "center",
  },
};

const enhance = compose(withStyles(styles));
export default enhance(App);
