import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import Modal from "../../reusable/modal";

function AddExercise({ open, onCancelClick, onSubmit }) {
  console.log("open ", open);
  return (
    <Modal onSubmit={onSubmit} open={open} onCancelClick={onCancelClick}>
      Add Exercise!
    </Modal>
  );
}

AddExercise.propTypes = {
  open: PropTypes.bool.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(AddExercise);
