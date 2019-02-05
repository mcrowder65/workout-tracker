import React from "react";
import PropTypes from "prop-types";
import { TextField, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import compose from "lodash.compose";
import shortid from "shortid";
import Modal from "../../reusable/modal";

function AddExercise({
  addExercise,
  isAddExerciseModalOpen,
  setAddExerciseModalOpen,
  classes,
}) {
  const onSubmit = (e) => {
    e.preventDefault();
    setAddExerciseModalOpen(false);
    const { title } = e.target.elements;

    addExercise({
      title: title.value,
      id: shortid.generate(),
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
  addExercise: PropTypes.func.isRequired,
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
