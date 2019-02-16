import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import WorkoutModal from "./workout-modal";
import { addWorkout } from "../../models/workout";

function AddWorkout({ setOpen, open }) {
  const onSubmit = async (e) => {
    e.preventDefault();
    setOpen(false);
    const { title } = e.target.elements;
    await addWorkout({ title: title.value });
  };

  const onCancelClick = () => {
    setOpen(false);
  };

  const [fields, setFields] = React.useState({ title: "" });
  const setField = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
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
