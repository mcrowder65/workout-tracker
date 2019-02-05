import React from "react";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";

function Home() {
  return <div>home</div>;
}

Home.propTypes = {};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Home);
