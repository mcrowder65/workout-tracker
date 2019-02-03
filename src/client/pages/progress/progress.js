import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";

function Progress(props) {
  return <div>Progress</div>;
}

Progress.propTypes = {};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Progress);
