import * as models from "./models";
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import { getUserFromFirebase } from "../services/firebase-service";

const root = "workouts";
export const addWorkout = async (workout) => {
  const { uid } = await getUserFromFirebase();
  return models.add(root, { ...workout, uid });
};

export const subscribeToWorkouts = async (onUpdate) => {
  const { uid } = await getUserFromFirebase();

  const workoutsRef = firebase
    .database()
    .ref()
    .child(root)
    .orderByChild("uid")
    .equalTo(uid);
  workoutsRef.on("value", onUpdate);
};

export const removeWorkout = (id) => {
  return models.remove(`${root}/${id}`);
};

export const updateWorkout = ({ id, ...workout }) => {
  return models.update(`${root}/${id}`, { id, ...workout });
};
