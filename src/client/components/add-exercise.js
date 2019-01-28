import React from "react";
import PropTypes from "prop-types";
import { Modal, Card, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import compose from "lodash.compose";

import useLocalStorageSetState from "../hooks/use-local-storage-set-state";

function AddExercise(props) {
  const [isModalOpen, setModalStatus] = useLocalStorageSetState(
    false,
    "add-exercise-modal"
  );
  const onSubmit = e => {
    e.preventDefault();
    setModalStatus(false);
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          // props.addExercise;
          setModalStatus(state => {
            return !state;
          });
        }}
      >
        Add a exercise
      </Button>
      <Modal open={isModalOpen} className={props.classes.modal}>
        <Card className={props.classes.modalCard}>
          <form className={props.classes.formContent} onSubmit={onSubmit}>
            <TextField variant="outlined" label="Exercise name" name="name" />
            <TextField variant="outlined" label="Reps" name="goalReps" />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Card>
      </Modal>
    </div>
  );
}

AddExercise.propTypes = {
  addExercise: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const styles = {
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modalCard: {
    width: "400px",
    height: "400px"
  },
  formContent: {
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column"
  }
};

const enhance = compose(withStyles(styles));
export default enhance(AddExercise);
