import * as models from "./models";
import { getUserFromFirebase } from "../services/firebase-service";
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";

const invoke = async (func) => {
  const { uid } = await getUserFromFirebase();
  return func(`exercises`, uid);
};
export const addExercise = async (exercise) => {
  await invoke((root, uid) => models.add(root, { ...exercise, uid }));
};

export const subscribeToExercises = async (onUpdate) => {
  const { uid } = await getUserFromFirebase();

  const exercisesRef = firebase
    .database()
    .ref()
    .child("exercises")
    .orderByChild("uid")
    .equalTo(uid);
  exercisesRef.on("value", onUpdate);
};

export const removeExercise = (id) => {
  return invoke((root) => models.remove(`${root}/${id}`));
};

export const setExercise = ({ id, ...exercise }) => {
  return invoke((root) => models.update(`${root}/${id}`, { id, ...exercise }));
};
