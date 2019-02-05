import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import compose from "lodash.compose";
import shortid from "shortid";
import Modal from "../../reusable/modal";

function AddExercise({
  addExercise,
  isAddExerciseModalOpen,
  setAddExerciseModalOpen,
}) {
  const onSubmit = (e) => {
    e.preventDefault();
    setAddExerciseModalOpen(false);
    const { title, goalReps, weight } = e.target.elements;

    addExercise({
      title: title.value,
      goalReps: goalReps.value,
      weight: weight.value,
      id: shortid.generate(),
    });
  };
  return (
    <Modal
      open={isAddExerciseModalOpen}
      onSubmit={onSubmit}
      onCancelClick={() => setAddExerciseModalOpen(false)}
    >
      <TextField variant="outlined" label="Exercise name" name="title" />
      <TextField variant="outlined" label="Weight" name="weight" />
      <TextField variant="outlined" label="Reps" name="goalReps" />
    </Modal>
  );
}

AddExercise.propTypes = {
  addExercise: PropTypes.func.isRequired,
  setAddExerciseModalOpen: PropTypes.func.isRequired,
  isAddExerciseModalOpen: PropTypes.bool.isRequired,
};

const styles = () => {
  return {};
};

const enhance = compose(withStyles(styles));
export default enhance(AddExercise);
