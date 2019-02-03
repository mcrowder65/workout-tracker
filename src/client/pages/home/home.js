import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";

function Home(props) {
  return <div>home</div>;
}

Home.propTypes = {};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Home);
