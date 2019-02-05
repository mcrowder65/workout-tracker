import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import { useFirebaseFunctions } from "../components/firebase-component";
import useState from "use-local-storage-set-state";
import Modal from "../reusable/modal";
import { Grid, TextField, Typography } from "@material-ui/core";

function Login({ classes, isLoginModalOpen, closeLoginModal }) {
  const [email, setEmail] = useState("", "login-email");
  const [password, setPassword] = React.useState("");
  const { login } = useFirebaseFunctions();
  const onSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <Modal
      onSubmit={onSubmit}
      open={isLoginModalOpen}
      onCancelClick={closeLoginModal}
    >
      <Grid item>
        <Typography variant="h6">Login</Typography>
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
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoginModalOpen: PropTypes.bool.isRequired,
  closeLoginModal: PropTypes.func.isRequired,
};

const styles = (theme) => {
  return {
    textField: {
      width: 250,
    },
  };
};

const enhance = compose(withStyles(styles));
export default enhance(Login);
