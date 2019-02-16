import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import Fab from "../../reusable/fab";
import useState from "use-local-storage-set-state";
import AddWorkout from "./add-workout";
import { subscribeToWorkouts } from "../../models/workout";
import Workout from "./workout";
import { Grid } from "@material-ui/core";

function Workouts({ classes }) {
  const [workouts, setWorkouts] = React.useState({});
  const [open, setOpen] = useState(false, "add-workout-modal");
  React.useEffect(() => {
    subscribeToWorkouts((snapshot) => {
      setWorkouts(snapshot.val() || {});
    });
  }, {});
  return (
    <div>
      <Grid
        container
        className={classes.workouts}
        alignItems="center"
        justify="center"
      >
        {Object.entries(workouts).map(([id, { title }]) => {
          return (
            <Grid item key={id} className={classes.workout}>
              <Workout id={id} title={title} />
            </Grid>
          );
        })}
      </Grid>
      {open && <AddWorkout setOpen={setOpen} open={open} />}
      <Fab onClick={() => setOpen(true)} />
    </div>
  );
}

Workouts.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  workouts: {
    marginBottom: 150,
  },
  workout: {
    margin: 5,
  },
  content: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
};

const enhance = compose(withStyles(styles));
export default enhance(Workouts);
