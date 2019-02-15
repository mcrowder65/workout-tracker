import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import WorkoutModal from "./workout-modal";
import useState from "use-local-storage-set-state";

function AddWorkout({ setOpen, open }) {
  const onSubmit = () => {
    setOpen(false);
  };

  const onCancelClick = () => {
    setOpen(false);
  };

  const [fields, setFields] = useState({}, "add-workout-modal-fields");

  const setField = (e) => {
    setFields((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <WorkoutModal
      onSubmit={onSubmit}
      onCancelClick={onCancelClick}
      open={open}
      title={fields.title}
      setField={setField}
      modalTitle="Add Workout"
    />
  );
}

AddWorkout.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(AddWorkout);
