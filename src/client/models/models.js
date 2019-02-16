import * as firebaseServices from "../services/firebase-service";

export const add = (url, body) => {
  return firebaseServices.addToTable(url, body);
};

export const subscribe = (url, onUpdate) => {
  return firebaseServices.subscribe(url, onUpdate);
};

export const remove = (url) => {
  return firebaseServices.deleteRecord(url);
};

export const update = (url, body, includeLastUpdated) => {
  return firebaseServices.updateTable(url, body, includeLastUpdated);
};
