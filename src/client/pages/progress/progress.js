import React from "react";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";

function Progress() {
  return <div>Progress</div>;
}

Progress.propTypes = {};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Progress);
