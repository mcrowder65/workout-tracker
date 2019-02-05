import React from "react";
import PropTypes from "prop-types";
import * as firebaseService from "../services/firebase-service";
import compose from "lodash.compose";
import { withSnackbar } from "./snackbar-provider";

const FirebaseContext = React.createContext();

class FirebaseComponent extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    addMessage: PropTypes.func.isRequired,
  };
  state = {
    currentUser: false,
  };
  refreshUser = async () => {
    const currentUser = await firebaseService.getUserFromFirebase();
    this.setState({ currentUser });
  };
  logout = async () => {
    try {
      await firebaseService.logout();
      await this.refreshUser();
    } catch (e) {
      this.props.addMessage(e.message);
    }
  };
  signup = async (email, password) => {
    try {
      await firebaseService.signup(email, password);
      await this.refreshUser();
    } catch (e) {
      this.props.addMessage(e.message);
    }
  };
  login = async (email, password) => {
    try {
      await firebaseService.login(email, password);
      await this.refreshUser();
    } catch (e) {
      this.props.addMessage(e.message);
    }
  };
  async componentDidMount() {
    await this.refreshUser();
  }
  render() {
    const { children } = this.props;
    const { currentUser } = this.state;
    return (
      <FirebaseContext.Provider
        value={{
          currentUser,
          refreshUser: this.refreshUser,
          logout: this.logout,
          login: this.login,
          signup: this.signup,
        }}
      >
        {typeof children === "function" ? children({ currentUser }) : children}
      </FirebaseContext.Provider>
    );
  }
}

export function useFirebaseFunctions() {
  const { currentUser, refreshUser, logout, signup, login } = React.useContext(
    FirebaseContext,
  );

  return { currentUser, refreshUser, logout, signup, login };
}
const enhance = compose(withSnackbar);
export default enhance(FirebaseComponent);
