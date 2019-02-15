import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import Modal from "../../reusable/modal";
import { Grid, Typography, TextField } from "@material-ui/core";

function WorkoutModal({
  classes,
  onSubmit,
  open,
  onCancelClick,
  setField,
  title,
  modalTitle,
}) {
  return (
    <Modal onSubmit={onSubmit} open={open} onCancelClick={onCancelClick}>
      <Grid item>
        <Typography variant="h6">{modalTitle}</Typography>
      </Grid>
      <Grid item container justify="center" alignItems="center">
        <Grid item>
          <TextField
            className={classes.textField}
            value={title}
            onChange={setField}
            name="title"
            label="Workout Title"
          />
        </Grid>
      </Grid>
    </Modal>
  );
}

WorkoutModal.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  setField: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(WorkoutModal);
