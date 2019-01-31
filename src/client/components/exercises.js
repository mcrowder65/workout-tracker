import React from "react";
import PropTypes from "prop-types";
import { Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import compose from "lodash.compose";

import Exercise from "./exercise";

function Exercises({ exercises, classes, removeExercise }) {
  return exercises.map(({ goalReps, weight, title, id }, index) => {
    return (
      <Card key={index} className={classes.card}>
        <Exercise
          goalReps={goalReps}
          weight={weight}
          title={title}
          id={id}
          removeExercise={removeExercise}
        />
      </Card>
    );
  });
}

Exercises.propTypes = {
  exercises: PropTypes.array.isRequired,
  removeExercise: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

Exercises.defaultProps = {
  exercises: []
};

const styles = {
  card: {
    width: 200,
    margin: 10
  }
};

const enhance = compose(withStyles(styles));
export default enhance(Exercises);
