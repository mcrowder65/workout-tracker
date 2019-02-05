import React from "react";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";

function Workouts() {
  return <div>workouts</div>;
}

Workouts.propTypes = {};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Workouts);
