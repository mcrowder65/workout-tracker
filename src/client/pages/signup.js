import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Modal,
  Button,
  Card,
  Typography,
} from "@material-ui/core";
import useState from "use-local-storage-set-state";
import { signup } from "../services/firebase-service";
import { useFirebaseFunctions } from "../components/firebase-component";

const Signup = ({ isSignUpModalOpen, closeSignUpModal, classes }) => {
  const [email, setEmail] = useState("", "signup-email");
  const [password, setPassword] = React.useState("");
  const { refreshUser } = useFirebaseFunctions();
  const onSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
    await refreshUser();
  };
  return (
    <Modal open={isSignUpModalOpen} className={classes.modal}>
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
                    onClick={closeSignUpModal}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Card>
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
