import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { Fab as MuiFab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

function Fab({ onClick, classes, color, ariaLabel, children }) {
  return (
    <MuiFab
      onClick={onClick}
      color={color}
      aria-label={ariaLabel}
      className={classes.fab}
    >
      {children}
    </MuiFab>
  );
}

Fab.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
};

Fab.defaultProps = {
  ariaLabel: "Add",
  color: "primary",
  children: <AddIcon />,
};

const styles = (theme) => {
  return {
    fab: theme.fab,
  };
};

const enhance = compose(withStyles(styles));
export default enhance(Fab);
