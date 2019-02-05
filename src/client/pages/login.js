import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import { useFirebaseFunctions } from "../components/firebase-component";
import useState from "use-local-storage-set-state";
import {
  Grid,
  TextField,
  Modal,
  Button,
  Card,
  Typography,
} from "@material-ui/core";

function Login({ classes, isLoginModalOpen, closeLoginModal }) {
  const [email, setEmail] = useState("", "login-email");
  const [password, setPassword] = React.useState("");
  const { login } = useFirebaseFunctions();
  const onSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <Modal open={isLoginModalOpen} className={classes.modal}>
      <Card>
        <Grid container justify="center" alignItems="center">
          <form onSubmit={onSubmit}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
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
              <Grid
                item
                container
                direction="row"
                justify="space-around"
                className={classes.buttons}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={closeLoginModal}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Card>
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
export default enhance(Login);
