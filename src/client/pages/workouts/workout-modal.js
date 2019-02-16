import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import Modal from "../../reusable/modal";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import useState from "use-local-storage-set-state";
import AddExercise from "./add-exercise";

function WorkoutModal({
  classes,
  onSubmit,
  open,
  onCancelClick,
  setField,
  title,
  modalTitle,
}) {
  const [isExerciseModalOpen, setExerciseModalStatus] = useState(
    false,
    "exercise-workout-modal",
  );
  const addExercise = (e) => {
    e.preventDefault();
    setExerciseModalStatus(false);
  };
  return (
    <Modal onSubmit={onSubmit} open={open} onCancelClick={onCancelClick}>
      <AddExercise
        open={isExerciseModalOpen}
        onCancelClick={() => setExerciseModalStatus(false)}
        onSubmit={addExercise}
      />
      <Grid item>
        <Typography variant="h6">{modalTitle}</Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <TextField
            className={classes.textField}
            value={title}
            variant="outlined"
            onChange={setField}
            name="title"
            label="Workout Title"
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => setExerciseModalStatus(true)}
          >
            Add Exercise
          </Button>
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
