import React from "react";
import PropTypes from "prop-types";
import { TextField, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import compose from "lodash.compose";
import Modal from "../../reusable/modal";
import * as exerciseModel from "../../models/exercise";

function AddExercise({
  isAddExerciseModalOpen,
  setAddExerciseModalOpen,
  classes,
}) {
  const onSubmit = async (e) => {
    e.preventDefault();
    setAddExerciseModalOpen(false);
    const { title } = e.target.elements;
    await exerciseModel.addExercise({
      title: title.value,
    });
  };
  return (
    <Modal
      open={isAddExerciseModalOpen}
      onSubmit={onSubmit}
      onCancelClick={() => setAddExerciseModalOpen(false)}
      className={classes.modal}
    >
      <Grid item>
        <Typography variant="h5">Add Exercise</Typography>
      </Grid>
      <Grid item>
        <TextField
          className={classes.textField}
          variant="outlined"
          label="Exercise name"
          name="title"
        />
      </Grid>
    </Modal>
  );
}

AddExercise.propTypes = {
  classes: PropTypes.object.isRequired,
  setAddExerciseModalOpen: PropTypes.func.isRequired,
  isAddExerciseModalOpen: PropTypes.bool.isRequired,
};

const styles = () => {
  return {
    textField: {
      width: 250,
    },
  };
};

const enhance = compose(withStyles(styles));
export default enhance(AddExercise);
