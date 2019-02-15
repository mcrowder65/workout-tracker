import {
  addToTable,
  deleteRecord,
  getUserFromFirebase,
  subscribe,
  updateTable,
} from "../services/firebase-service";

const hitService = async (func) => {
  const { uid } = await getUserFromFirebase();
  const url = `exercises/${uid}`;
  return func(url);
};
export const addExercise = (exercise) => {
  return hitService((url) => addToTable(url, exercise));
};

export const subscribeToExercises = (onUpdate) => {
  return hitService((url) => subscribe(url, onUpdate));
};

export const removeExercise = (id) => {
  return hitService((url) => deleteRecord(`${url}/${id}`));
};

export const setExercise = ({ id, ...exercise }) => {
  return hitService((url) => updateTable(`${url}/${id}`, exercise));
};
