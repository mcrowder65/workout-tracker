import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";

function Profile(props) {
  return <div>profile</div>;
}

Profile.propTypes = {};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Profile);
