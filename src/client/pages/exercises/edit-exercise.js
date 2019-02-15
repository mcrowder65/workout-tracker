import React from "react";
import PropTypes from "prop-types";
import { TextField, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import compose from "lodash.compose";
import Modal from "../../reusable/modal";
import * as exerciseModel from "../../models/exercise";

function EditExercise({
  isEditEditExerciseOpen,
  setEditExerciseModalOpen,
  classes,
  id,
  title,
}) {
  const [localTitle, setTitle] = React.useState(title);
  const onSubmit = async (e) => {
    e.preventDefault();
    setEditExerciseModalOpen(false);
    await exerciseModel.setExercise({ title: localTitle, id });
  };
  return (
    <Modal
      open={isEditEditExerciseOpen}
      onSubmit={onSubmit}
      onCancelClick={() => setEditExerciseModalOpen(false)}
      className={classes.modal}
    >
      <Grid item>
        <Typography variant="h5">Edit Exercise</Typography>
      </Grid>
      <Grid item>
        <TextField
          className={classes.textField}
          variant="outlined"
          label="Exercise name"
          value={localTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>
    </Modal>
  );
}

EditExercise.propTypes = {
  classes: PropTypes.object.isRequired,
  setEditExerciseModalOpen: PropTypes.func.isRequired,
  isEditEditExerciseOpen: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const styles = () => {
  return {
    textField: {
      width: 250,
    },
  };
};

const enhance = compose(withStyles(styles));
export default enhance(EditExercise);
