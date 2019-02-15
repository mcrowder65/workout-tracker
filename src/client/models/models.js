import * as firebaseServices from "../services/firebase-service";

const hitService = async (root, func) => {
  const { uid } = await firebaseServices.getUserFromFirebase();
  const url = `${root}/${uid}`;
  return func(url);
};
export const add = (root, body) => {
  return hitService(root, (url) => firebaseServices.addToTable(url, body));
};

export const subscribe = (root, onUpdate) => {
  return hitService(root, (url) => firebaseServices.subscribe(url, onUpdate));
};

export const remove = (root, id) => {
  return hitService(root, (url) =>
    firebaseServices.deleteRecord(`${url}/${id}`),
  );
};

export const update = (root, { id, ...body }) => {
  return hitService(root, (url) =>
    firebaseServices.updateTable(`${url}/${id}`, body),
  );
};
