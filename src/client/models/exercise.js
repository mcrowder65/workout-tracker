import { add, subscribe, remove, update } from "./models";

const root = "exercises";
export const addExercise = (exercise) => {
  return add(root, exercise);
};

export const subscribeToExercises = (onUpdate) => {
  return subscribe(root, onUpdate);
};

export const removeExercise = (id) => {
  return remove(root, id);
};

export const setExercise = ({ id, ...exercise }) => {
  return update(root, { id, ...exercise });
};
