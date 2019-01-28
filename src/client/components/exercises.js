import React from "react";
import PropTypes from "prop-types";

import Exercise from "./exercise";

function Exercises(props) {
  return props.exercises.map(({ goalReps, weight, title }, index) => {
    return (
      <Exercise goalReps={goalReps} weight={weight} title={title} key={index} />
    );
  });
}

Exercises.propTypes = {
  exercises: PropTypes.array.isRequired
};

Exercises.defaultProps = {
  exercises: []
};

export default Exercises;
