import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import { Snackbar as MuiSnackbar } from "@material-ui/core";
import shortid from "shortid";
import { Portal } from "react-portal";

const Context = React.createContext();
const AUTO_HIDE_DURATION_DEFAULT = 2000;

export function Snackbar({ children }) {
  const [messages, setMessages] = React.useState({});
  const removeMessage = (id) => {
    const { [id]: removedMessage, ...newMessages } = messages;
    setMessages(newMessages);
  };
  const addMessage = (
    message,
    autoHideDuration = AUTO_HIDE_DURATION_DEFAULT,
  ) => {
    const id = shortid.generate();
    setMessages({ ...messages, [id]: { id, message, autoHideDuration } });
  };

  return (
    <>
      <Portal node={document && document.getElementById("snackbar")}>
        {Object.values(messages).map(({ message, id, autoHideDuration }) => {
          return (
            <MuiSnackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={true}
              key={id}
              onClose={() => removeMessage(id)}
              message={message}
              autoHideDuration={autoHideDuration}
            />
          );
        })}
      </Portal>
      {children({ addMessage })}
    </>
  );
}

Snackbar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
function SnackbarProvider({ children }) {
  const [messages, setMessages] = React.useState({});
  const removeMessage = (id) => {
    const { [id]: removedMessage, ...newMessages } = messages;
    setMessages(newMessages);
  };
  const addMessage = (
    message,
    autoHideDuration = AUTO_HIDE_DURATION_DEFAULT,
  ) => {
    const id = shortid.generate();
    setMessages({ ...messages, [id]: { id, message, autoHideDuration } });
  };
  return (
    <Context.Provider value={{ addMessage, removeMessage }}>
      <>
        {Object.values(messages).map(({ message, id, autoHideDuration }) => {
          return (
            <MuiSnackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={true}
              key={id}
              onClose={() => removeMessage(id)}
              message={message}
              autoHideDuration={autoHideDuration}
            />
          );
        })}
        {children}
      </>
    </Context.Provider>
  );
}

SnackbarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(SnackbarProvider);

export const withSnackbar = (YourComponent) => {
  function ComponentToConnect(props) {
    // TODO fix this
    const { addMessage, removeMessage } = React.useContext(Context) || {
      addMessage: () => {},
      removeMessage: () => {},
    };
    return (
      <YourComponent
        {...props}
        addMessage={addMessage}
        removeMessage={removeMessage}
      />
    );
  }
  return ComponentToConnect;
};
