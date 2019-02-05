import React from "react";
import PropTypes from "prop-types";
import * as firebaseService from "../services/firebase-service";

const FirebaseContext = React.createContext();

class FirebaseComponent extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  };
  state = {
    currentUser: false,
  };

  refreshUser = async () => {
    const currentUser = await firebaseService.getUserFromFirebase();
    this.setState({ currentUser });
  };
  logout = async () => {
    await firebaseService.logout();
    await this.refreshUser();
  };
  signup = async (email, password) => {
    await firebaseService.signup(email, password);
    await this.refreshUser();
  };
  login = async (email, password) => {
    await firebaseService.login(email, password);
    await this.refreshUser();
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
        {children({ currentUser })}
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
export default FirebaseComponent;
