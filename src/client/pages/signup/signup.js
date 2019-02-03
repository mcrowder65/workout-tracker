import React from "react";
import PropTypes from "prop-types";
import { compose } from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";
import useState from "use-local-storage-set-state";

const Signup = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Grid container>
      <form>
        <TextField />
      </form>
    </Grid>
  );
};

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Signup);
