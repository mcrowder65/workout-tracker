import React from "react";

import Exercises from "./exercises";
import AddExercise from "./add-exercise";

function Workout() {
  const [exercises, addExercise] = React.useState([]);
  return (
    <div>
      <Exercises exercises={exercises} />
      <AddExercise addExercise={addExercise} />
    </div>
  );
}

Workout.propTypes = {};

export default Workout;
