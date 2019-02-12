import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiSpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

function SpeedDial({ actions, classes }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const fabClick = () => {
    setOpen((state) => !state);
  };
  return (
    <div className={classes.speedDial}>
      <MuiSpeedDial
        ariaLabel="SpeedDial example"
        hidden={false}
        icon={<SpeedDialIcon />}
        // onBlur={handleClose}
        onClick={fabClick}
        onClose={handleClose}
        // onFocus={handleOpen}
        // onMouseEnter={handleOpen}
        // onMouseLeave={handleClose}
        open={open}
        direction="up"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={(...args) => {
              handleClose();
              action.onClick(...args);
            }}
          />
        ))}
      </MuiSpeedDial>
    </div>
  );
}
SpeedDial.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      name: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ).isRequired,
  classes: PropTypes.object.isRequired,
};
const styles = (theme) => ({ speedDial: theme.fab });
export default withStyles(styles)(SpeedDial);
