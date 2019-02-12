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

function Exercises({ classes }) {
  const [isAddExerciseModalOpen, setAddExerciseModalOpen] = useState(
    false,
    "add-exercise-modal",
  );
  const [exercises, setExercises] = useState([], "exercises");
  const removeExercise = (id) => {
    setExercises((state) => state.filter((exercise) => id !== exercise.id));
  };
  const addExercise = (exercise) => {
    setExercises((state) => [...state, exercise]);
  };
  return (
    <div className={classes.content}>
      <AddExercise
        isAddExerciseModalOpen={isAddExerciseModalOpen}
        setAddExerciseModalOpen={setAddExerciseModalOpen}
        addExercise={addExercise}
      />
      <Grid
        container
        className={classes.exercises}
        alignItems="center"
        justify="center"
      >
        {exercises.map(({ goalReps, weight, title, id }) => {
          return (
            <Grid item key={id} className={classes.exercise}>
              <Exercise
                goalReps={goalReps}
                weight={weight}
                title={title}
                id={id}
                removeExercise={removeExercise}
              />
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
          { icon: <FitnessCenter />, name: "Add Body Part" },
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
