import React from "react";
import compose from "lodash.compose";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useFirebaseFunctions } from "../../components/firebase-component";

function Profile() {
  const { logout } = useFirebaseFunctions();
  return (
    <div>
      <Button color="primary" variant="contained" onClick={logout}>
        Sign out
      </Button>
    </div>
  );
}

Profile.propTypes = {};

const styles = {};

const enhance = compose(withStyles(styles));
export default enhance(Profile);
