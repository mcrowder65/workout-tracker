import React from "react";
import PropTypes from "prop-types";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import Signup from "./signup";
import Login from "./login";
import useState from "use-local-storage-set-state";

function LandingPage({ classes }) {
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(
    false,
    "isSignupModalOpen",
  );
  const [isLoginModalOpen, setLoginModalOpen] = useState(
    false,
    "isLoginModalOpen",
  );
  return (
    <Grid
      className={classes.content}
      container
      justify="center"
      alignItems="center"
    >
      <Signup
        isSignUpModalOpen={isSignUpModalOpen}
        closeSignUpModal={() => setSignUpModalOpen(false)}
      />
      <Login
        isLoginModalOpen={isLoginModalOpen}
        closeLoginModal={() => setLoginModalOpen(false)}
      />
      <Grid item>
        <Typography variant="h4" align="center">
          Welcome to Lift Buddy!
        </Typography>
        <Typography align="center">
          This is currently a personal project where I am trying to make a
          really good lifting app for myself.
        </Typography>
      </Grid>
      <Grid item className={classes.buttons}>
        <Grid container justify="space-around">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setLoginModalOpen(true)}
            >
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setSignUpModalOpen(true)}
            >
              Signup
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  content: {
    height: "100%",
  },
  buttons: {
    width: "80%",
  },
};

const enhance = compose(withStyles(styles));
export default enhance(LandingPage);
