import React from "react";
import PropTypes from "prop-types";
import { Button, Typography, Grid, Card } from "@material-ui/core";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import EditExercise from "./edit-workout";
import useState from "use-local-storage-set-state";
import * as workoutModel from "../../models/workout";

function Workout({ title, id, classes }) {
  const [open, setOpen] = useState(false, "edit-workout-modal");
  const removeWorkout = () => {
    workoutModel.removeWorkout(id);
  };
  return (
    <Card className={classes.card}>
      <EditExercise open={open} setOpen={setOpen} id={id} title={title} />
      <Grid
        className={classes.content}
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <div>
            <Typography
              variant="h6"
              style={{ fontSize: "5vw" }}
              noWrap
              paragraph
              inline
            >
              {title}
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          container
          className={classes.buttons}
          direction="row"
          justify="space-around"
        >
          <Grid item>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => setOpen(true)}
            >
              Edit
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={removeWorkout}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

Workout.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

const styles = {
  card: {
    padding: 5,
    width: 150,
    height: 80,
  },
  content: {
    height: "100%",
    width: "100%",
  },
  buttons: {
    width: "100%",
  },
};

const enhance = compose(withStyles(styles));
export default enhance(Workout);
