import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function Exercises({ classes }) {
  return (
    <div>
      Exercises
      <Fab color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  );
}

Exercises.propTypes = { classes: PropTypes.object.isRequired };

const styles = theme => {
  return {
    fab: theme.fab,
  };
};

const enhance = compose(withStyles(styles));
export default enhance(Exercises);
