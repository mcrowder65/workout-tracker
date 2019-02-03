import React from "react";
import PropTypes from "prop-types";
import { compose } from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";

const Signup = (props) => {
  return <div>Signup</div>;
};

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Signup);
