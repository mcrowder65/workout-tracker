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

export const removeExercise = async (id) => {
  const { uid } = await getUserFromFirebase();
  await deleteRecord(`exercises/${uid}/${id}`);
};

export const setExercise = async ({ id, ...exercise }) => {
  const { uid } = await getUserFromFirebase();

  await updateTable(`exercises/${uid}/${id}`, exercise);
};
