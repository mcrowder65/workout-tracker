import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import { Snackbar } from "@material-ui/core";
import shortid from "shortid";

const Context = React.createContext();
const AUTO_HIDE_DURATION_DEFAULT = 2000;

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
            <Snackbar
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
    const { addMessage, removeMessage } = React.useContext(Context);
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
