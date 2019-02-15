import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import WorkoutModal from "./workout-modal";
import { updateWorkout } from "../../models/workout";
import useState from "use-local-storage-set-state";

function EditWorkout({ setOpen, open, id, title }) {
  const onSubmit = async (e) => {
    e.preventDefault();
    setOpen(false);
    const { title: eTitle } = e.target.elements;
    await updateWorkout({ id, title: eTitle.value });
  };

  const onCancelClick = () => {
    setOpen(false);
  };

  const [fields, setFields] = useState({ title }, "edit-workout-modal-fields");

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
      modalTitle="Edit Workout"
    />
  );
}

EditWorkout.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(EditWorkout);
