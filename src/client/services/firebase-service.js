import firebase from "@firebase/app";
import "@firebase/auth";

export const signup = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const getUserFromFirebase = () => {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => resolve(user));
  });
};
