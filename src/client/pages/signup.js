import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import Modal from "../reusable/modal";
import { Grid, TextField, Typography } from "@material-ui/core";
import useState from "use-local-storage-set-state";
import { useFirebaseFunctions } from "../components/firebase-component";

const Signup = ({ isSignUpModalOpen, closeSignUpModal, classes }) => {
  const [email, setEmail] = useState("", "signup-email");
  const [password, setPassword] = React.useState("");
  const { signup } = useFirebaseFunctions();
  const onSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };
  return (
    <Modal
      open={isSignUpModalOpen}
      className={classes.modal}
      onSubmit={onSubmit}
      onCancelClick={closeSignUpModal}
    >
      <Grid item>
        <Typography variant="h6">Signup</Typography>
      </Grid>
      <Grid item container justify="center" alignItems="center">
        <Grid item>
          <TextField
            className={classes.textField}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            required
            variant="outlined"
            margin="normal"
          />
        </Grid>
        <Grid item>
          <TextField
            type="password"
            className={classes.textField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            required
            variant="outlined"
            margin="normal"
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  isSignUpModalOpen: PropTypes.bool.isRequired,
  closeSignUpModal: PropTypes.func.isRequired,
};

const styles = (theme) => {
  return {
    modal: theme.modal,
    buttons: {
      width: "80%",
      margin: 10,
    },
    textField: {
      width: 250,
    },
  };
};

const enhance = compose(withStyles(styles));
export default enhance(Signup);
