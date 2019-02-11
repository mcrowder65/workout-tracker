import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";

const actions = [
  { icon: <FileCopyIcon />, name: "Add Exercise" },
  { icon: <SaveIcon />, name: "Add Body Part" },
];

function SpeedDials() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    console.log("handleClick!");
    setOpen((state) => !state.open);
  };

  const handleClose = () => {
    console.log("handleClose");
    setOpen(false);
  };

  const fabClick = () => {
    console.log("handleOpen)");
    setOpen((state) => !state);
  };
  console.log("open ", open);
  return (
    <SpeedDial
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
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  );
}
SpeedDials.propTypes = {
  classes: PropTypes.object.isRequired,
};
const styles = (theme) => ({
  speedDial: {
    position: "absolute",
    "&$directionUp, &$directionLeft": {
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 3,
    },
    "&$directionDown, &$directionRight": {
      top: theme.spacing.unit * 2,
      left: theme.spacing.unit * 3,
    },
  },
});
export default withStyles(styles)(SpeedDials);
