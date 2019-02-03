import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";

function Workouts(props) {
  return <div>workouts</div>;
}

Workouts.propTypes = {};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Workouts);
