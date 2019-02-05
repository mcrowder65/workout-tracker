import React from "react";
import PropTypes from "prop-types";
import { Modal, Card, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import compose from "lodash.compose";
import useState from "use-local-storage-set-state";
import shortid from "shortid";

function AddExercise(props) {
  const [isModalOpen, setModalStatus] = useState(false, "add-exercise-modal");
  const onSubmit = (e) => {
    e.preventDefault();
    setModalStatus(false);
    const { title, goalReps, weight } = e.target.elements;

    props.addExercise({
      title: title.value,
      goalReps: goalReps.value,
      weight: weight.value,
      id: shortid.generate(),
    });
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setModalStatus((state) => {
            return !state;
          });
        }}
      >
        Add a exercise
      </Button>
      <Modal open={isModalOpen} className={props.classes.modal}>
        <Card className={props.classes.modalCard}>
          <form className={props.classes.formContent} onSubmit={onSubmit}>
            <TextField variant="outlined" label="Exercise name" name="title" />
            <TextField variant="outlined" label="Weight" name="weight" />
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
  classes: PropTypes.object.isRequired,
};

const styles = (theme) => {
  return {
    modal: theme.modal,
    modalCard: {
      width: "400px",
      height: "400px",
    },
    formContent: {
      height: "100%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "column",
    },
  };
};

const enhance = compose(withStyles(styles));
export default enhance(AddExercise);
