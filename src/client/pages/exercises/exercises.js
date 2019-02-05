import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Fab from "../../reusable/fab";
import AddExercise from "./add-exercise";
import useState from "use-local-storage-set-state";
import Exercise from "./exercise";

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
      {exercises.map(({ goalReps, weight, title, id }, index) => {
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
      })}
      <Fab onClick={() => setAddExerciseModalOpen(true)} />
    </div>
  );
}

Exercises.propTypes = { classes: PropTypes.object.isRequired };

const styles = () => {
  return {
    card: {
      margin: 20,
    },
    content: {
      height: "100%",
    },
  };
};

const enhance = compose(withStyles(styles));
export default enhance(Exercises);
