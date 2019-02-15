import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SpeedDial from "../../reusable/speed-dial";
import AddExercise from "./add-exercise";
import useState from "use-local-storage-set-state";
import Exercise from "./exercise";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import * as exerciseModel from "../../models/exercise";

function Exercises({ classes }) {
  const [isAddExerciseModalOpen, setAddExerciseModalOpen] = useState(
    false,
    "add-exercise-modal",
  );
  const [exercises, setExercises] = React.useState({});

  React.useEffect(() => {
    exerciseModel.subscribeToExercises((snapshot) => {
      setExercises(snapshot.val() || {});
    });
  }, {});
  return (
    <div className={classes.content}>
      <AddExercise
        isAddExerciseModalOpen={isAddExerciseModalOpen}
        setAddExerciseModalOpen={setAddExerciseModalOpen}
      />

      <Grid
        container
        className={classes.exercises}
        alignItems="center"
        justify="center"
      >
        {Object.entries(exercises).map(([id, { title }]) => {
          return (
            <Grid item key={id} className={classes.exercise}>
              <Exercise id={id} title={title} />
            </Grid>
          );
        })}
      </Grid>
      <SpeedDial
        onClick={() => setAddExerciseModalOpen(true)}
        actions={[
          {
            icon: <FitnessCenter />,
            name: "Add Exercise",
            onClick: () => setAddExerciseModalOpen(true),
          },
        ]}
      />
    </div>
  );
}

Exercises.propTypes = { classes: PropTypes.object.isRequired };

const styles = () => {
  return {
    exercises: {
      marginBottom: 150,
    },
    exercise: {
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
};

const enhance = compose(withStyles(styles));
export default enhance(Exercises);
