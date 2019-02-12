import React from "react";
import PropTypes from "prop-types";
import * as firebaseService from "../services/firebase-service";
import compose from "lodash.compose";
import { withSnackbar } from "./snackbar-provider";

const FirebaseContext = React.createContext();

function FirebaseComponent({ children }) {
  const [currentUser, setUser] = React.useState(false);
  const refreshUser = async () => {
    const u = await firebaseService.getUserFromFirebase();
    setUser(u);
  };
  const logout = async (addMessage) => {
    try {
      await firebaseService.logout();
      await refreshUser();
    } catch (e) {
      addMessage(e.message);
    }
  };
  const signup = async (email, password, addMessage) => {
    try {
      await firebaseService.signup(email, password);
      await refreshUser();
    } catch (e) {
      addMessage(e.message);
    }
  };
  const login = async (email, password, addMessage) => {
    try {
      await firebaseService.login(email, password);
      await refreshUser();
    } catch (e) {
      addMessage(e.message);
    }
  };
  React.useEffect(() => {
    if (currentUser === false) {
      refreshUser();
    }
  });
  return (
    <FirebaseContext.Provider
      value={{
        currentUser,
        refreshUser,
        logout,
        login,
        signup,
      }}
    >
      {typeof children === "function" ? children({ currentUser }) : children}
    </FirebaseContext.Provider>
  );
}

FirebaseComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
export function useFirebaseFunctions() {
  const { currentUser, refreshUser, logout, signup, login } = React.useContext(
    FirebaseContext,
  );

  return { currentUser, refreshUser, logout, signup, login };
}
const enhance = compose(withSnackbar);
export default enhance(FirebaseComponent);
