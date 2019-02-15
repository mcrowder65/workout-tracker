import { add, subscribe, remove, update } from "./models";

const root = "workouts";
export const addWorkout = (workout) => {
  return add(root, workout);
};

export const subscribeToWorkouts = (onUpdate) => {
  return subscribe(root, onUpdate);
};

export const removeWorkout = (id) => {
  return remove(root, id);
};

export const updateWorkout = ({ id, ...workout }) => {
  return update(root, { id, ...workout });
};
