import React from "react";
import PropTypes from "prop-types";
import { Button, Typography, Grid } from "@material-ui/core";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";

function Exercise({ title, weight, goalReps, removeExercise, id, classes }) {
  return (
    <Grid
      className={classes.grid}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item>
        <div>
          <Typography>Title: {title}</Typography>
        </div>
        <div>
          <Typography>weight: {weight}</Typography>
        </div>
        <div>
          <Typography>reps: {goalReps}</Typography>
        </div>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => removeExercise(id)}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}

Exercise.propTypes = {
  goalReps: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  removeExercise: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

const styles = {
  grid: {
    padding: 5
  }
};

const enhance = compose(withStyles(styles));
export default enhance(Exercise);
