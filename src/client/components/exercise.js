import React from "react";
import PropTypes from "prop-types";

function Exercise(props) {
  return (
    <div>
      <div>Title: {props.title}</div>
      <div>weight: {props.weight}</div>
      <div>reps: {props.goalReps}</div>
    </div>
  );
}

Exercise.propTypes = {
  goalReps: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default Exercise;
