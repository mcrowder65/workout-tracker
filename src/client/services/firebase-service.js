import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import { fetcher } from "./fetcher";

export const signup = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const logout = () => {
  return firebase.auth().signOut();
};
export const getUserFromFirebase = () => {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => resolve(user));
  });
};

export const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

const firebaseUrl = `https://liftbuddyio.firebaseio.com`;
async function hitFirebase(tableName, headers) {
  const user = await getUserFromFirebase();
  const authToken = await user.getIdToken();
  return fetcher(`${firebaseUrl}/${tableName}.json?auth=${authToken}`, headers);
}
export const addToTable = (tableName, body) => {
  return hitFirebase(tableName, {
    method: "POST",
    body: JSON.stringify({ ...body, created: new Date() }),
  });
};

export const subscribe = (url, onUpdate) => {
  const remindersRef = firebase.database().ref(url);
  remindersRef.on("value", onUpdate);
};

export const deleteRecord = (tableName) => {
  return hitFirebase(tableName, { method: "DELETE" });
};

export const setTable = (tableName, body) => {
  return hitFirebase(tableName, {
    method: "PUT",
    body: JSON.stringify({
      ...body,
      lastEdited: new Date(),
    }),
  });
};

export const updateTable = (tableName, body) => {
  return hitFirebase(tableName, {
    method: "PATCH",
    body: JSON.stringify({
      ...body,
      lastEdited: new Date(),
    }),
  });
};
