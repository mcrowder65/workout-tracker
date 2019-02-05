import React from "react";
import useState from "use-local-storage-set-state";

import Exercises from "./exercises";
import AddExercise from "./add-exercise";

function Workout() {
  const [exercises, setExercises] = useState([], "exercises");
  const removeExercise = (id) => {
    setExercises((state) => state.filter((exercise) => id !== exercise.id));
  };
  return (
    <div>
      <Exercises exercises={exercises} removeExercise={removeExercise} />
      <AddExercise
        addExercise={(exercise) => {
          setExercises((state) => [...state, exercise]);
        }}
      />
    </div>
  );
}

Workout.propTypes = {};

export default Workout;
